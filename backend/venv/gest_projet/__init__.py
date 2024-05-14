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
    nom = data.get('nom')
    niveau_id = data.get('niveau_id')
    module_id = data.get('module_id')
    club_id = data.get('club_id')
    tech_idiation = data.get('Tech_idiation')
    user_id = data.get('user_id')
    favori = False
    if not nom:
        nom = "nouveau_projet"
    print(data)
    cur = mysql.connection.cursor()
    current_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    cur.execute("INSERT INTO Projet (nom, Niveau_ID, Module_ID, Club_ID, Tech_idiation, date_creation) VALUES (%s, %s, %s, %s, %s, %s)", (nom, niveau_id, module_id, club_id, tech_idiation, current_date))
    mysql.connection.commit()
    projet_id = cur.lastrowid  # recuperer l'id du projet (projet_id)
    access = "Admin"
    cur.execute("INSERT INTO ProjetMembers (User_ID, Projet_ID, Access, Favori) VALUES (%s, %s, %s, %s)", (user_id, projet_id, access, favori))
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
    cur.execute("SELECT Access FROM ProjetMembers WHERE Projet_ID = %s AND User_ID = %s", (projet_id, user_id))
    access, = cur.fetchone()
    if access == "Admin":
        cur.execute("DELETE FROM ProjetMembers WHERE Projet_ID = %s", (projet_id,))
        mysql.connection.commit()
        cur.execute("DELETE FROM Projet WHERE Projet_ID = %s", (projet_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200
    else:
        cur.execute("DELETE FROM ProjetMembers WHERE Projet_ID = %s AND User_ID = %s", (projet_id, user_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200

@gest_projet.route('/update_project_favori', methods=['POST'])
def update_project_favori():
    data = request.get_json()
    projet_id = data.get('projet_id')
    new_favori_state = data.get('new_favori_state')
    user_id = data.get('user_id')
    if not projet_id or new_favori_state is None:
        return jsonify({'message': 'Missing parameters'}), 400
    cur = mysql.connection.cursor()
    cur.execute("UPDATE ProjetMembers SET Favori = %s WHERE Projet_ID = %s AND User_ID = %s", (new_favori_state, projet_id, user_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Project favorite state updated successfully'}), 200

@gest_projet.route('/update_project_name', methods=['POST'])
def update_project_name():
    data = request.get_json()
    projet_id = data.get('projet_id')
    new_name = data.get('new_name')
    user_id = data.get('user_id')
    if not projet_id or not new_name:
        return jsonify({'message': 'Missing parameters'}), 400
    cur = mysql.connection.cursor()
    cur.execute("SELECT Access FROM ProjetMembers WHERE Projet_ID = %s AND User_ID = %s", (projet_id, user_id))
    access, = cur.fetchone()
    print("access", access)
    if access == "Admin":
        cur.execute("UPDATE Projet SET nom = %s WHERE Projet_ID = %s", (new_name, projet_id,))
    else:
        return jsonify({'message': 'you can not update the project name'}), 400
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Project name updated successfully'}), 200

# Autres routes suivent ici avec des modifications similaires.

@gest_projet.route('/acceuil', methods=['GET','POST'])
def acceuil():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
    # Sélectionner tous les projets associés à l'utilisateur avec leurs détails
    cur.execute("SELECT Projet.Projet_ID, Projet.nom, ProjetMembers.Favori, ProjetMembers.Access, Projet.date_creation, Projet.Module_ID "
                "FROM Projet "
                "INNER JOIN ProjetMembers ON Projet.Projet_ID = ProjetMembers.Projet_ID "
                "WHERE ProjetMembers.User_ID = %s", (user_id,))

    listeprojet = cur.fetchall()
    
    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id, nom, favori, access, date_creation, module_id = projet
        print(nom)
        cur.execute("SELECT Utilisateur.username "
                    "FROM Utilisateur "
                    "INNER JOIN ProjetMembers ON Utilisateur.User_ID = ProjetMembers.User_ID "
                    "WHERE ProjetMembers.Projet_ID = %s", (projet_id,))
        admin_name, = cur.fetchone()
        projects.append({'projet_id': projet_id, 'nom': nom, 'access': access, 'favori': favori, 'date_creation': date_creation, 'module_id': module_id, 'admin_name': admin_name})
    cur.close()
    return jsonify({'message': 'List of projects returned successfully', 'projects': projects}), 200

@gest_projet.route('/shared_projects', methods=['GET','POST'])
def shared_projects():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
    condition = "Admin"
    # Sélectionner tous les projets associés à l'utilisateur avec leurs détails
    cur.execute("SELECT Projet.Projet_ID, Projet.nom, ProjetMembers.Favori, ProjetMembers.Access "
                "FROM Projet "
                "INNER JOIN ProjetMembers ON Projet.Projet_ID = ProjetMembers.Projet_ID "
                "WHERE ProjetMembers.User_ID = %s AND ProjetMembers.Access <> %s ", (user_id, condition,))
    listeprojet = cur.fetchall()
    
    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id, nom, access, favori = projet
        print(nom)
        projects.append({'projet_id': projet_id, 'nom': nom, 'access': access, 'favori': favori})

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

@gest_projet.route('/liste_club', methods=['GET'])
def liste_club():
    cur = mysql.connection.cursor()
    cur.execute("SELECT Club_ID, Nom, photo FROM Club")
    clubs = cur.fetchall()
    liste_clubs = []
    for club in clubs:
        club_id, nom, photo_data = club
        liste_clubs.append({
            'club_id': club_id,
            'nom': nom,
            'photo': photo_data
        })
    return jsonify({'message': 'List of Clubs returned successfully', 'clubs': liste_clubs}), 200

@gest_projet.route('/liste_event', methods=['GET'])
def liste_event():
    cur = mysql.connection.cursor()
    cur.execute("SELECT evenement_ID, Nom, photo, Club_ID FROM evenements")
    events = cur.fetchall()
    liste_events = []
    for event in events:
        evenement_ID, nom, photo, Club_ID = event
        liste_events.append({
            'evenement_ID': evenement_ID,
            'nom': nom,
            'photo': photo,
            'Club_ID': Club_ID
        })
    return jsonify({'message': 'List of Events returned successfully', 'events': liste_events}), 200

@gest_projet.route('/liste_module', methods=['GET'])
def liste_module():
    cur = mysql.connection.cursor()
    cur.execute("SELECT Module_ID, Nom, Niveau_ID FROM Module")
    modules = cur.fetchall()
    liste_modules = []
    for module in modules:
        module_id, nom_module, niveau_id = module
        liste_modules.append({
            'module_id': module_id,
            'nom_module': nom_module,
            'niveau_id': niveau_id
        })
    return jsonify({'message': 'List of modules returned successfully', 'modules': liste_modules}), 200

@gest_projet.route('/liste_niveau', methods=['GET'])
def liste_niveau():
    cur = mysql.connection.cursor()
    cur.execute("SELECT Niveau_ID, Nom, Cycle FROM Niveau")
    niveaux = cur.fetchall()
    liste_niveau = []
    for niveau in niveaux:
        niveau_ID, nom_niveau, cycle = niveau
        liste_niveau.append({
            'niveau_id': niveau_ID,
            'nom_niveau': nom_niveau,
            'cycle': cycle
        })
    return jsonify({'message': 'List of niveau returned successfully', 'niveau': liste_niveau}), 200

@gest_projet.route('/type', methods=['POST'])
def get_user_type():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id is required'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    user_type = cur.fetchone()
    if user_type is None:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify({'message': 'Type returned successfully', 'type': user_type[0]}), 200

@gest_projet.route('/changer_photo', methods=['POST'])
def changer_photo():
    data = request.get_json()
    user_id = data.get('user_id')
    new_photo = data.get('new_photo')

    if not user_id:
        return jsonify({'message': 'Missing required fields'}), 400

    if not new_photo:
        new_photo = None

    cur = mysql.connection.cursor()
    cur.execute("UPDATE Utilisateur SET Photo = %s WHERE User_ID = %s", (new_photo, user_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Photo updated successfully'}), 200

@gest_projet.route('/info', methods=['POST'])
def get_user_info():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id is required'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT username, Photo, email FROM Utilisateur WHERE User_ID = %s", (user_id,))
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
    data = request.get_json()
    user_id = data.get('user_id')
    new_name = data.get('new_name')

    if not user_id or not new_name:
        return jsonify({'message': 'Missing required fields'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT username FROM Utilisateur WHERE User_ID = %s", (user_id,))
    existing_user = cur.fetchone()
    if not existing_user:
        cur.close()
        return jsonify({'message': 'User does not exist'}), 404

    cur.execute("UPDATE Utilisateur SET username = %s WHERE User_ID = %s", (new_name, user_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Name updated successfully'}), 200

@gest_projet.route('/update_password', methods=['POST'])
def update_password():
    data = request.get_json()
    user_id = data.get('user_id')
    old_password = data.get('old_password')
    new_password = data.get('new_password')

    if not user_id or not old_password or not new_password:
        return jsonify({'message': 'Missing required fields'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT Password FROM Utilisateur WHERE User_ID = %s", (user_id,))
    user_data = cur.fetchone()
    if user_data:
        if not check_password_hash(user_data[0], old_password):
            return jsonify({'message': 'Incorrect old password'}), 400
    else:
        return jsonify({'message': 'User not found'}), 404

    hashed_new_password = generate_password_hash(new_password)
    cur.execute("UPDATE Utilisateur SET Password = %s WHERE User_ID = %s", (hashed_new_password, user_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Password updated successfully'}), 200



@gest_projet.route('/search_club', methods=['POST'])
def search_club():
    data = request.get_json()
    mot_cle = data.get('mot_cle')
    cur = mysql.connection.cursor()
    like_pattern = f"%{mot_cle}%"
    cur.execute("SELECT Club_ID, Nom, photo FROM Club WHERE Nom LIKE %s", (like_pattern,))
    clubs = cur.fetchall()
    result = []
    for club in clubs:
        club_ID, nom_club, photo = club
        result.append({
            'club_id': club_ID,
            'nom_club': nom_club,
            'photo': photo
        })
    cur.close()
    return jsonify({'message': 'List of clubs returned successfully', 'clubs': result}), 200

@gest_projet.route('/search_module', methods=['POST'])
def search_module():
    data = request.get_json()
    mot_cle = data.get('mot_cle')
    cur = mysql.connection.cursor()
    like_pattern = f"%{mot_cle}%"
    cur.execute("""
        SELECT Module.Module_ID, Module.Nom, Module.Niveau_ID, Niveau.Nom, Niveau.Cycle
        FROM Module
        JOIN Niveau ON Module.Niveau_ID = Niveau.Niveau_ID
        WHERE Module.Nom LIKE %s
    """, (like_pattern,))
    modules = cur.fetchall()
    result = []
    for module in modules:
        module_id, module_name, niveau_id, niveau_name, cycle = module
        result.append({
            'module_id': module_id,
            'module_name': module_name,
            'niveau_id': niveau_id,
            'niveau_name': niveau_name,
            'cycle': cycle
        })
    cur.close()
    return jsonify({'message': 'List of modules returned successfully', 'modules': result}), 200
@gest_projet.route('/search_project', methods=['POST'])
def search_project():
    data = request.get_json()
    filters = data.get('filters', {})
    keyword = data.get('keyword')
    user_id = data.get('user_id')

    query = """
    SELECT Projet.Projet_ID, Projet.nom, ProjetMembers.Favori, ProjetMembers.Access, Projet.date_creation, Utilisateur.username AS Admin_Name
    FROM Projet
    INNER JOIN ProjetMembers ON Projet.Projet_ID = ProjetMembers.Projet_ID
    INNER JOIN Utilisateur ON ProjetMembers.User_ID = Utilisateur.User_ID
    LEFT JOIN Club ON Projet.Club_ID = Club.Club_ID
    LEFT JOIN Module ON Projet.Module_ID = Module.Module_ID
    LEFT JOIN Niveau ON Projet.Niveau_ID = Niveau.Niveau_ID
    WHERE ProjetMembers.User_ID = %s
    """
    values = [user_id]
    cur = mysql.connection.cursor()

    # Add filters based on the project name and admin name if specified in filters
    print('filters', filters)
    if filters['admin_email']:
        cur.execute("SELECT User_ID FROM Utilisateur WHERE email = %s", (keyword,))
        admin_id = cur.fetchone()

        if admin_id:
            query += " AND Projet.Projet_ID IN (SELECT Projet_ID FROM ProjetMembers WHERE User_ID=%s AND Access = 'Admin')"
            values.append(admin_id[0])
        else:
            return jsonify({'message': 'List of projects returned successfully', 'projects': []}), 200

    elif filters['club_name']:
        query += " AND Club.Nom LIKE %s"
        values.append(f"%{keyword}%")

    elif filters['module_name']:
        query += " AND Module.Nom LIKE %s"
        values.append(f"%{keyword}%")

    elif filters['niveau_name']:
        query += " AND Niveau.Nom LIKE %s"
        values.append(f"%{keyword}%")

    # if filters['favori']:
    #     query += " AND ProjetMembers.Favori = %s"
    #     values.append()
    elif keyword:
        query += " AND Projet.nom LIKE %s"
        values.append(f"%{keyword}%")

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
    print(formatted_projects)
    return jsonify({'message': 'List of projects returned successfully', 'projects': formatted_projects}), 200

@gest_projet.route('/share', methods=['POST'])
def share():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    projet_id = data.get('projet_id')
    email = data.get('email')
    message = data.get('message')
    cur = mysql.connection.cursor()
    cur.execute("SELECT User_ID FROM Utilisateur WHERE Email=%s", (email,))
    existing_member = cur.fetchone()

    if not existing_member:
        return jsonify({'message': 'User does not exist'}), 400

    member_id = existing_member[0]

    cur.execute("SELECT User_ID FROM ProjetMembers WHERE User_ID=%s AND Projet_ID=%s", (member_id, projet_id,))
    existing_member = cur.fetchone()

    if existing_member:
        return jsonify({'message': 'Member already exists'}), 409

    print(projet_id)
    cur.execute("INSERT INTO ProjetMembers (Projet_ID, User_ID, Favori, Access) VALUES (%s, %s, %s, %s)", (projet_id, member_id, False, "Mod"))
    mysql.connection.commit()
    cur.execute("SELECT Nom FROM Projet WHERE Projet_ID=%s", (projet_id,))
    nom = cur.fetchone()

    cur.close()
    send_mail2(email, nom, message)

    return jsonify({'message': 'Member Added successfully'}), 200


def send_mail2(email, projet, message):
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
    cur.execute("SELECT User_ID FROM Utilisateur WHERE Email=%s", (email,))
    existing_member = cur.fetchone()

    if not existing_member:
        return jsonify({'message': 'User does not exist'}), 400

    member_id = existing_member[0]

    cur.execute("SELECT User_ID FROM ProjetMembers WHERE User_ID=%s AND Projet_ID=%s", (member_id, projet_id,))
    existing_member = cur.fetchone()

    if existing_member:
        return jsonify({'message': 'Member already exists'}), 409

    print(projet_id)
    cur.execute("INSERT INTO ProjetMembers (Projet_ID, User_ID, Favori, Access) VALUES (%s, %s, %s, %s)", (projet_id, member_id, False, "Mod"))
    mysql.connection.commit()
    cur.execute("SELECT Nom FROM Projet WHERE Projet_ID=%s", (projet_id,))
    nom = cur.fetchone()
    cur.execute("SELECT Nom FROM Module WHERE Module_ID=%s", (module_id,))
    module = cur.fetchone()

    cur.close()
    send_mail3(email, nom, module)

    return jsonify({'message': 'Member Added successfully'}), 200


def send_mail3(email, projet, module):
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
    cur.execute("SELECT Utilisateur.User_ID, Utilisateur.Username, Utilisateur.Email, Utilisateur.Photo, ProjetMembers.Access FROM Utilisateur INNER JOIN ProjetMembers ON ProjetMembers.User_ID = Utilisateur.User_ID WHERE Projet_ID=%s", (projet_id,))

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
    projet_id = data.get('projet_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT Nom FROM Projet WHERE Projet_ID = %s", (projet_id,))
    nom, = cur.fetchone()
    cur.close()
    return jsonify({'message': 'nom returned successfully', 'nom': nom}), 200

@gest_projet.route('/get_club_name', methods=['POST'])
def get_club_name():
    data = request.get_json()
    club_id = data.get('club_id')
    if club_id is None:
        return jsonify({'error': 'Missing Club_ID parameter'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT Nom FROM Club WHERE Club_ID = %s", (club_id,))
    result = cur.fetchone()
    cur.close()

    if result:
        return jsonify({'Club_ID': club_id, 'Nom': result[0]})
    else:
        return jsonify({'error': 'Club not found'}), 404