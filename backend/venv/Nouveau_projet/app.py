from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'khalil'
app.config['MYSQL_DB'] = 'test'

mysql = MySQL(app)

@app.route('/new_project', methods=['POST'])
def new_project():

    data = request.get_json()
    nom=data.get('nom')
    niveau_id=data.get('niveau_id')
    module_id=data.get('module_id')
    club_id=data.get('club_id')
    tech_idiation = data.get('Tech_idiation')
    user_id=data.get('user_id')
    favori=False
    projetMembers = data.get('projetMembers', [])
    if not nom:
        nom="nouveau_projet"
        
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

    cur.execute("INSERT INTO projet (nom, niveau_id, module_id,club_id,Tech_idiation) VALUES (%s, %s, %s,%s,%s )", (nom, niveau_id, module_id,club_id,tech_idiation,))
    mysql.connection.commit()
    projet_id = cur.lastrowid #recuperer l'id du projet (projet_id)
    access="Admin"
    cur.execute("INSERT INTO projetmembers (user_id, projet_id, access,Favori) VALUES (%s, %s, %s,%s)", (user_id, projet_id, access,favori,))
    mysql.connection.commit()
    
    access="Mod" 

    for member_id in projetMembers:
        cur.execute("INSERT INTO projetmembers (user_id, projet_id, access,Favori) VALUES (%s, %s, %s,%s)", (member_id, projet_id, access,favori,))
        mysql.connection.commit()

    cur.close()
    return jsonify({'message': 'Created new project successfully', 'projet_id': projet_id}), 200


@app.route('/delete_project', methods=['DELETE'])
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
        cur.execute("DELETE FROM projet WHERE projet_id = %s", (projet_id,))
        mysql.connection.commit()
        cur.execute("DELETE FROM ProjetMembers WHERE projet_id = %s", (projet_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200
    else:
        cur.execute("DELETE FROM ProjetMembers WHERE projet_id = %s AND user_id = %s", (projet_id,user_id,))
        mysql.connection.commit()
        return jsonify({'message': 'Project deleted successfully'}), 200
    
@app.route('/update_project_favori', methods=['PUT'])
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










@app.route('/update_project_name', methods=['PUT'])
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



@app.route('/acceuil', methods=['GET','POST'])
def acceuil():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
   # Sélectionner tous les projets associés à l'utilisateur avec leurs détails
    cur.execute("SELECT projet.projet_id, projet.nom, ProjetMembers.Favori, ProjetMembers.access "
                "FROM projet "
                "INNER JOIN ProjetMembers ON projet.projet_id = projetmembers.projet_id "
                "WHERE ProjetMembers.user_id = %s", (user_id,))
    listeprojet = cur.fetchall()
    
    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id,nom, access,favori = projet
        print(nom)
        projects.append({'projet_id': projet_id,'nom':nom, 'access': access,'favori':favori})

    
   

    return jsonify({'message': 'List of projects returned successfully', 'projects': projects}), 200


@app.route('/search_projects', methods=['POST'])
def search_projects():
    data = request.get_json()
    filters = data.get('filters', {})
    keyword = data.get('keyword')
    user_id=data.get('user_id')
    sort_by = data.get('sort_by')

    ## Construction de la requête SQL
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










def open_project():
    data = request.get_json()
    user_id=data.get('user_id')
    projet_id =data.get('projet_id')


if __name__ == '__main__':
    app.run(debug=True)



# def acceuil():
#     data = request.get_json()
#     user_id = data.get('user_id')
#     cur = mysql.connection.cursor()
    # cur.execute("SELECT projet_id, access FROM projetmembers WHERE user_id = %s", (user_id,))
    # listeprojet = cur.fetchall()  # Récupérer tous les résultats de la requête

    # projects = []  # Une liste pour stocker les projets
    # for projet in listeprojet:
    #     projet_id, access = projet
    #     cur.execute("SELECT nom,Favori FROM projet WHERE projet_id = %s", (projet_id,))
    #     nom,favori = cur.fetchone()
    #     projects.append({'projet_id': projet_id,'nom':nom, 'access': access,'favori':favori})

#     return jsonify({'message': 'retourned liste project successfully', 'projects': projects}), 200




    
    








