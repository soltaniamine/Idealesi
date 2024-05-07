from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL
from datetime import datetime
import base64
from flask_mailman import Mail, EmailMessage
from werkzeug.security import generate_password_hash, check_password_hash
gest_projet = Blueprint("gest_projet", __name__)
mysql = MySQL()

@gest_projet.route('/new_project', methods=['POST'])
def new_project():

    data = request.get_json()
    nom=data.get('nom')
    niveau_id=data.get('niveau_id')
    module_id=data.get('module_id')
    club_id=data.get('club_id')
    tech_idiation = data.get('Tech_idiation')
    user_id=data.get('user_id')
    favori=False
    if not nom:
        nom="nouveau_projet"
    print(data)
    cur = mysql.connection.cursor()
    # cur.execute("SELECT club_id FROM club WHERE club_id = %s", (club_id,))
    # test = cur.fetchone()
    # if not test and club_id:
    #     return  jsonify({'message': 'club not found'}), 404
    
    if tech_idiation not in ["Brainstorming", "Brainwriting"]:
        return jsonify({'message': 'Invalid value for Tech_idiation'}), 400
    
    # cur.execute("SELECT niveau_id FROM niveau WHERE niveau_id = %s", (niveau_id,))
    # test = cur.fetchone()
    # if not test:
    #     return  jsonify({'message': 'club not found'}), 404
    
    # cur.execute("SELECT module_id FROM module WHERE module_id = %s", (module_id,))
    # test = cur.fetchone()
    # if not test:
    #     return  jsonify({'message': 'module not found'}), 404
    current_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    cur.execute("INSERT INTO Projet (nom, Niveau_ID, Module_ID, Club_ID, Tech_idiation, date_creation) VALUES (%s, %s, %s, %s, %s, %s)",(nom, niveau_id, module_id, club_id, tech_idiation, current_date,)) 
    mysql.connection.commit()
    projet_id = cur.lastrowid #recuperer l'id du projet (projet_id)
    access="Admin"
    cur.execute("INSERT INTO projetmembers (user_id, projet_id, access,Favori) VALUES (%s, %s, %s,%s)", (user_id, projet_id, access,favori,))
    mysql.connection.commit() 

    
    cur.close()
    return jsonify({'message': 'Created new project successfully', 'projet_id': projet_id}), 200


@gest_projet.route('/delete_project', methods=['POST'])
def delete_project():
    data = request.get_json()
    user_id = data.get('user_id')
    projet_id = data.get('projet_id')
   

    if not user_id or not projet_id:
        return jsonify({'message': 'Missing parameters'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT access FROM ProjetMembers WHERE projet_id = %s AND user_id = %s",(projet_id,user_id))
    access,=cur.fetchone()
    if access=="Admin":
        cur.execute("DELETE FROM ProjetMembers WHERE projet_id = %s", (projet_id,))
        mysql.connection.commit()
        cur.execute("DELETE FROM projet WHERE projet_id = %s", (projet_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200
    else:
        cur.execute("DELETE FROM ProjetMembers WHERE projet_id = %s AND user_id = %s", (projet_id,user_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200
    
@gest_projet.route('/update_project_favori', methods=['POST'])
def update_project_favori():
    data = request.get_json()
    projet_id = data.get('projet_id')
    new_favori_state = data.get('new_favori_state')
    user_id=data.get('user_id')

    if not projet_id or new_favori_state is None:
        return jsonify({'message': 'Missing parameters'}), 400
    
    cur = mysql.connection.cursor()
    cur.execute("UPDATE ProjetMembers SET Favori = %s WHERE projet_id = %s AND user_id = %s", (new_favori_state, projet_id,user_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Project favorite state updated successfully'}), 200










@gest_projet.route('/update_project_name', methods=['POST'])
def update_project_name():
    data = request.get_json()
    projet_id = data.get('projet_id')
    new_name = data.get('new_name')
    user_id=data.get('user_id')

    if not projet_id or not new_name:
        return jsonify({'message': 'Missing parameters'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT access FROM ProjetMembers WHERE projet_id = %s AND user_id = %s",(projet_id,user_id))
    access,=cur.fetchone()
    print("accee",access)
    if access=="Admin":
        cur.execute("UPDATE projet SET nom = %s WHERE projet_id = %s", (new_name, projet_id,))
    else:
        return jsonify({'message': 'you can  not update the project name '}), 400
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Project name updated successfully'}), 200

@gest_projet.route('/acceuil', methods=['GET','POST'])
def acceuil():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
   # Sélectionner tous les projets associés à l'utilisateur avec leurs détails
    cur.execute("SELECT projet.projet_id, projet.nom, ProjetMembers.Favori, ProjetMembers.access, projet.date_creation, projet.module_id "
                "FROM projet "
                "INNER JOIN ProjetMembers ON projet.projet_id = projetmembers.projet_id "
                "WHERE ProjetMembers.user_id = %s", (user_id,))

    listeprojet = cur.fetchall()
    
    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id,nom,favori, access, date_creation, module_id = projet
        print(nom)
        cur.execute("SELECT utilisateur.username "
                    "FROM utilisateur "
                    "INNER JOIN ProjetMembers ON utilisateur.user_id = projetmembers.user_id "
                    "WHERE ProjetMembers.projet_id = %s", (projet_id,))
        admin_name,=cur.fetchone()
        projects.append({'projet_id': projet_id,'nom':nom, 'access': access,'favori':favori, 'date_creation': date_creation, 'module_id': module_id,'admin_name':admin_name})
    cur.close()
    return jsonify({'message': 'List of projects returned successfully', 'projects': projects}), 200

@gest_projet.route('/shared_projects', methods=['GET','POST'])
def shared_projects():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
    condition="Admin"
   # Sélectionner tous les projets associés à l'utilisateur avec leurs détails
    cur.execute("SELECT projet.projet_id, projet.nom, ProjetMembers.Favori, ProjetMembers.access "
                "FROM projet "
                "INNER JOIN ProjetMembers ON projet.projet_id = projetmembers.projet_id "
                "WHERE ProjetMembers.user_id = %s AND  ProjetMembers.access <>%s ", (user_id,condition,))
    listeprojet = cur.fetchall()
    
    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id,nom, access,favori = projet
        print(nom)
        projects.append({'projet_id': projet_id,'nom':nom, 'access': access,'favori':favori})

    return jsonify({'message': 'List of projects returned successfully', 'projects': projects}), 200

@gest_projet.route('/search_projects', methods=['POST'])
def search_projects():
    data = request.get_json()
    filters = data.get('filters', {})
    keyword = data.get('keyword')
    user_id=data.get('user_id')
    sort_by = data.get('sort_by')

    # Construction de la requête SQL
    query = "SELECT projet.projet_id,projet.nom, ProjetMembers.Favori, ProjetMembers.access FROM projet INNER JOIN ProjetMembers ON projet.projet_id = projetmembers.projet_id"
            
    conditions = []
    values = []
    conditions.append("ProjetMembers.user_id= %s ")
    values.append(user_id)
    # Filtrer les projets selon les critères spécifiés
    if 'club_id' in filters and ('module_id' in filters or 'niveau_id' in filters):
        return jsonify({'message': 'Impossible Search'}), 400
    if 'club_id' in filters:
        conditions.append("projet.club_id = %s")
        values.append(filters['club_id'])
    if 'module_id' in filters:
        conditions.append("projet.module_id = %s")
        values.append(filters['module_id'])
    if 'niveau_id' in filters:
        conditions.append("projet.niveau_id = %s")
        values.append(filters['niveau_id'])
    if 'favori' in filters:
        conditions.append("ProjetMembers.Favori = %s")
        values.append(filters['favori'])

    # Ajouter une condition de recherche par mot-clé
    if keyword:
        conditions.append("projet.nom LIKE %s")
        values.append(f"%{keyword}%")
    
    
    # Construire la clause WHERE
    if conditions:
        query += " WHERE " + " AND ".join(conditions)

    # Trier les résultats si une méthode de tri est spécifiée
    if sort_by:
        query += f" ORDER BY {sort_by}"
    print(query,values)
    
    
    
    cur = mysql.connection.cursor()
    cur.execute(query, tuple(values))
    projects = cur.fetchall()

    # Récupérer les résultats de la requête et les formater pour la réponse JSON
    formatted_projects = [] 
    for project in projects:
        projet_id, nom, favori, access = project
        formatted_projects.append({
            'projet_id': projet_id,
            'nom': nom,
            'favori': favori,
            'access': access
        })
    print(formatted_projects)
    return jsonify({'message': 'List of projects returned successfully', 'projects': formatted_projects}), 200

@gest_projet.route('/liste_club',methods=['GET'])
def liste_club():
    cur = mysql.connection.cursor()
    cur.execute("SELECT Club_ID, Nom, photo FROM Club")
    clubs = cur.fetchall()
    liste_clubs = []
    for club in clubs:
        club_id, nom, photo_data, = club
        # if not photo_data:
        #     print('Message: Photo', nom, 'not found')
        # else:

        liste_clubs.append({
            'club_id': club_id,
            'nom': nom,
            'photo': photo_data
        })
    
    return jsonify({'message': 'List of Clubs returned successfully', 'clubs': liste_clubs}), 200

@gest_projet.route('/liste_event',methods=['GET'])
def liste_event():
    # data = request.get_json()
    # user_id=data.get('user_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT evenement_ID,Nom, photo,Club_ID FROM evenements ")
    events= cur.fetchall()
    liste_events=[]
    for event in events:
        evenement_ID,nom,photo,Club_ID=event
        liste_events.append({
            'evenement_ID': evenement_ID,
            'nom': nom,
            'photo': photo,
            'Club_ID': Club_ID
        })
    
    return jsonify({'message': 'List of Events returned successfully', 'events': liste_events}), 200

@gest_projet.route('/liste_module',methods=['GET'])
def liste_module():
    # data = request.get_json()
    # user_id=data.get('user_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT Module_ID,Nom, Niveau_ID FROM module")
    modules= cur.fetchall()
    liste_modules=[]
    for module in modules:
        module_id,nom_module,niveau_id=module
        liste_modules.append({
            'module_id': module_id,
            'nom_module': nom_module,
            'niveau_id':niveau_id
        })
    
    return jsonify({'message': 'List of modules returned successfully', 'modules':liste_modules}), 200

@gest_projet.route('/liste_niveau',methods=['GET'])
def liste_niveau():
    # data = request.get_json()
    # user_id=data.get('user_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT Niveau_ID,nom,cycle FROM niveau")
    modules= cur.fetchall()
    liste_niveau=[]
    for module in modules:
        niveau_ID, nom_niveau, cycle=module
        liste_niveau.append({
            'niveau_id': niveau_ID,
            'nom_niveau': nom_niveau,
            'cycle': cycle
        })
    
    return jsonify({'message': 'List of niveau returned successfully', 'niveau':liste_niveau}), 200

@gest_projet.route('/type', methods=['POST'])
def get_user_type():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id is required'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM utilisateur WHERE utilisateur.User_ID = %s ", (user_id,))
    user_type = cur.fetchone()
    if user_type is None:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify({'message': 'Type returned successfully', 'type': user_type[0]}), 200


@gest_projet.route('/upload_photo', methods=['POST'])
def upload_photo():
    # Vérifier si le fichier a été envoyé dans la requête
    data=request.get_json()
    
    
    file_name= data.get('photo')
    print(file_name)
    
    # Vérifier si le fichier est une image
    # if not file_name.endswith('.png') or not file_name.endswith('.jpg'):
    #     return jsonify({'message': 'Uploaded file is not an image'}), 400
    with open(file_name, 'rb') as photo:
        photo_data = photo.read()

# Insérer les données de l'image dans la base de données
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO photos (Photo) VALUES (%s)", (photo_data,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Photo uploaded successfully'}), 200

@gest_projet.route('/info', methods=['POST'])
def get_user_info():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id is required'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT username, Photo, email FROM utilisateur WHERE User_ID = %s", (user_id,))
    user_info = cur.fetchone()

    if user_info is None:
        return jsonify({'error': 'No user found with the given user_id'}), 404
    
    username, photo, email = user_info
    user_data = {
        'username': username,
        'photo': photo,
        'email': email
    }
    
    return jsonify({'message': 'User information returned successfully', 'info': user_data}), 200

@gest_projet.route('/update_nom', methods=['POST'])
def update_nom():
   
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    new_name = data.get('new_name')


    # Vérifier si les champs obligatoires sont présents
    if not user_id or not new_name:
        return jsonify({'message': 'Missing required fields'}), 400


    cur = mysql.connection.cursor()
    # Vérifier si l'utilisateur existe
    cur.execute("SELECT username FROM utilisateur WHERE user_id=%s", (user_id,))
    existing_user = cur.fetchone()
    if not existing_user:
        cur.close()
        return jsonify({'message': 'User does not exist'}), 404


    # Mettre à jour le nom de l'utilisateur
    cur.execute("UPDATE utilisateur SET username= %s WHERE user_id = %s", (new_name, user_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Name updated successfully'}), 200

@gest_projet.route('/update_password', methods=['POST'])
def update_password():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    old_password = data.get('old_password')
    new_password = data.get('new_password')
   
    # Vérifier si les champs obligatoires sont présents
    if not user_id or not old_password or not new_password:
        return jsonify({'message': 'Missing required fields'}), 400


    # Création d'un curseur pour exécuter les requêtes SQL
    cur = mysql.connection.cursor()


    # Vérifier si l'ancien mot de passe est correct
    cur.execute("SELECT Password FROM Utilisateur WHERE User_ID = %s", (user_id,))
    user_data = cur.fetchone()
    if user_data:
        if not check_password_hash(user_data[0], old_password):
            return jsonify({'message': 'Incorrect old password'}), 400
    else:
        return jsonify({'message': 'User not found'}), 404


    # Mettre à jour le mot de passe de l'utilisateur
    hashed_new_password = generate_password_hash(new_password)
    cur.execute("UPDATE Utilisateur SET Password = %s WHERE User_ID = %s", (hashed_new_password, user_id,))
   
    # Commit des changements dans la base de données
    mysql.connection.commit()
    # Fermeture du curseur
    cur.close()


    return jsonify({'message': 'Password updated successfully'}), 200


@gest_projet.route('/search_club', methods=['GET'])
def search_club():
   
    # Récupérer les données JSON de la requête
    data = request.get_json()
   
    mot_cle = data.get('mot_cle')
    cur = mysql.connection.cursor()
    like_pattern = f"%{mot_cle}%"  # Ajoute des jokers avant et après le mot-clé
    cur.execute("SELECT * FROM Club WHERE Nom LIKE %s", (like_pattern,))
   
    clubs= cur.fetchall()
    result=[]
    cur.close()
    for club in clubs:
        club_ID, nom_club, photo=club
        result.append({
            'club_id': club_ID,
            'nom_club': nom_club,
            'photo': photo
        })

    return jsonify({'message': 'List of clubs returned successfully', 'clubs':result}), 200

@gest_projet.route('/search_module', methods=['GET'])
def search_module():
    # Récupérer les données JSON de la requête
    data = request.get_json()

    mot_cle = data.get('mot_cle')

    cur = mysql.connection.cursor()
    like_pattern = f"%{mot_cle}%"  # Ajoute des jokers avant et après le mot-clé

    # Requête pour chercher les modules et joindre les informations du niveau associé
    cur.execute("""
        SELECT Module.Module_ID, Module.Nom,Module.Niveau_ID ,Niveau.Nom , Niveau.Cycle
        FROM Module
        JOIN Niveau ON Module.Niveau_ID = Niveau.Niveau_ID
        WHERE Module.Nom LIKE %s
    """, (like_pattern,))

    modules = cur.fetchall()
    result = []
    cur.close()
    for module in modules:
        result.append({
            'module_id': module[0],
            'module_name': module[1],
            'niveau_id': module[2],
            'niveau_name': module[3],
            'cycle': module[4]
        })

    
    return jsonify({'message': 'List of modules returned successfully', 'modules': result}), 200




@gest_projet.route('/search_project', methods=['POST'])
def search_project():
    data = request.get_json()
    filters = data.get('filters', {})
    keyword = data.get('keyword')
    user_id = data.get('user_id')
    sort_by = data.get('sort_by', 'projet.date_creation DESC')  # Default sort by creation date

    query = """
    SELECT projet.Projet_ID, projet.nom, ProjetMembers.Favori, ProjetMembers.Access, projet.date_creation, Utilisateur.username AS Admin_Name
    FROM projet
    INNER JOIN ProjetMembers ON projet.Projet_ID = ProjetMembers.Projet_ID 
    INNER JOIN Utilisateur ON ProjetMembers.User_ID = Utilisateur.User_ID
    LEFT JOIN Club ON projet.Club_ID = Club.Club_ID
    LEFT JOIN Module ON projet.Module_ID = Module.Module_ID
    LEFT JOIN Niveau ON projet.Niveau_ID = Niveau.Niveau_ID
    WHERE ProjetMembers.User_ID = %s
    """
    values = [user_id]
    cur = mysql.connection.cursor()
    # Add filters based on the project name and admin name if specified in filters
    if keyword:
        query += " AND projet.nom LIKE %s"
        values.append(f"%{keyword}%")

    if 'admin_email' in filters:
        cur.execute("SELECT user_id FROM Utilisateur WHERE Email = %s", (filters['admin_email'],))
        admin_id = cur.fetchone()
        if admin_id:
            query += " AND Projet.Projet_ID IN (SELECT Projet_ID FROM ProjetMembers WHERE User_ID=%s AND Access = 'Admin')"
            values.append(admin_id[0])
        

    if 'club_name' in filters:
        query += " AND Club.Nom LIKE %s"
        values.append(f"%{filters['club_name']}%")

    if 'module_name' in filters:
        query += " AND Module.Nom LIKE %s"
        values.append(f"%{filters['module_name']}%")

    if 'niveau_name' in filters:
        query += " AND Niveau.Nom LIKE %s"
        values.append(f"%{filters['niveau_name']}%")

    if 'favori' in filters:
        query += " AND ProjetMembers.Favori = %s"
        values.append(filters['favori'])

    # Sort results if a sort_by field is provided
    if sort_by:
        query += f" ORDER BY {sort_by}"
    print(query)
    cur.execute(query, tuple(values))
    projects = cur.fetchall()
    cur.close()

    formatted_projects = [{
        'projet_id': project[0],
        'nom': project[1],
        'favori': project[2],
        'access': project[3],
        'date_creation': project[4],
        'admin_name': project[5]
    } for project in projects]

    return jsonify({'message': 'List of projects returned successfully', 'projects': formatted_projects}), 200

@gest_projet.route('/share', methods=['POST'])
def share():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    projet_id = data.get('projet_id')
    email = data.get('email')
    message = data.get('message')
    cur = mysql.connection.cursor()
    cur.execute("SELECT user_id FROM utilisateur WHERE email=%s", (email,))
    existing_member = cur.fetchone()
   
    if not existing_member:
        return jsonify({'message': 'User does not exist'}), 400
   
    member_id = existing_member[0]
   
    cur.execute("SELECT user_id FROM ProjetMembers WHERE user_id=%s AND projet_id=%s", (member_id, projet_id,))
    existing_member = cur.fetchone()
   
    if existing_member:
        return jsonify({'message': 'Member already exists'}), 409
    
    print(projet_id)
    cur.execute("INSERT INTO ProjetMembers (projet_id, user_id, favori, access) VALUES (%s, %s, %s, %s)", (projet_id, member_id, False, "mod",))
    mysql.connection.commit()
    cur.execute("SELECT nom FROM projet WHERE Projet_ID=%s", (projet_id,))
    nom = cur.fetchone()

    cur.close()
    send_mail2(email, nom, message)

    return jsonify({'message': 'Member Added successfully'}), 200

def send_mail2(email,projet, message):
    msg = EmailMessage(
        "IdealESI - Nouveau projet partagé avec vous",
        f"Un nouveau projet nomé: {projet} est partagé avec vous. Merci// {message}",
        "idealesi@esi.dz",
        [email]  
    )
    msg.send()
    return jsonify({'message': 'email sent successfully '})

@gest_projet.route('/assistance', methods=['POST'])
def assitance():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    projet_id = data.get('projet_id')
    email = data.get('email')
    module_id = data.get('module_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT user_id FROM utilisateur WHERE email=%s", (email,))
    existing_member = cur.fetchone()
   
    if not existing_member:
        return jsonify({'message': 'User does not exist'}), 400
   
    member_id = existing_member[0]
   
    cur.execute("SELECT user_id FROM ProjetMembers WHERE user_id=%s AND projet_id=%s", (member_id, projet_id,))
    existing_member = cur.fetchone()
   
    if existing_member:
        return jsonify({'message': 'Member already exists'}), 409
    
    print(projet_id)
    cur.execute("INSERT INTO ProjetMembers (projet_id, user_id, favori, access) VALUES (%s, %s, %s, %s)", (projet_id, member_id, False, "mod",))
    mysql.connection.commit()
    cur.execute("SELECT nom FROM projet WHERE Projet_ID=%s", (projet_id,))
    nom = cur.fetchone()
    cur.execute("SELECT Nom FROM module WHERE Module_ID=%s", (module_id,))
    module = cur.fetchone()

    cur.close()
    send_mail3(email, nom,module)

    return jsonify({'message': 'Member Added successfully'}), 200

def send_mail3(email,projet,module):
    msg = EmailMessage(
        "IdealESI - Nouvelle demande d'assistance reçue",
        f"Bonjour cher enseignant, une nouvelle équipe a besoin de votre assistance dans le module {module}. Le projet est intitulé: {projet}, vueillez verifier votre liste des projets. Merci ",
        "idealesi@esi.dz",
        [email]  
    )
    msg.send()
    return jsonify({'message': 'email sent successfully '})


@gest_projet.route('/projet_members', methods=['POST'])
def projet_members():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    projet_id = data.get('projet_id')

    if not projet_id:
        return jsonify({'message': 'Projet ID is required'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT utilisateur.user_id ,utilisateur.username ,utilisateur.email, utilisateur.Photo, projetmembers.access FROM utilisateur INNER JOIN projetmembers ON projetmembers.user_id=utilisateur.user_id WHERE projet_id=%s", (projet_id,))
    
    members = cur.fetchall()
    cur.close()

    liste_members = [{
        'member_id': member[0],
        'nom': member[1],
        'email': member[2],
        'photo': member[3],
        'access': member[4],
    } for member in members]
   
    return jsonify({'message': 'List of members returned successfully', 'liste_members': liste_members}), 200


@gest_projet.route('/nom_projet', methods=['POST'])
def nom_projet():
    data = request.get_json()
    projet_id= data.get('projet_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT nom FROM projet WHERE projet_id = %s", (projet_id,))
    nom, = cur.fetchone()
    cur.close()
    return jsonify({'message': 'nom returned successfully','nom':nom}), 200