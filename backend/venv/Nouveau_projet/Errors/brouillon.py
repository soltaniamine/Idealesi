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

@app.route('/acceuil', methods=['GET','POST'])
def acceuil():
    data = request.get_json()
    user_id = data.get('user_id')
    cur = mysql.connection.cursor()
    
    cur.execute("SELECT projet_id, access,Favori FROM projetmembers WHERE user_id = %s", (user_id,))
    listeprojet = cur.fetchall()  # Récupérer tous les résultats de la requête

    projects = []  # Une liste pour stocker les projets
    for projet in listeprojet:
        projet_id, access,favori = projet
        cur.execute("SELECT nom FROM projet WHERE projet_id = %s", (projet_id,))
        nom = cur.fetchone()
        print(nom)
        projects.append({'projet_id': projet_id,'nom':nom, 'access': access,'favori':favori})

    return jsonify({'message': 'List of projects returned successfully', 'projects': projects}), 200

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

    if tech_idiation not in ["Brainstorming", "Brainwriting"]:
        return jsonify({'message': 'Invalid value for Tech_idiation'}), 400
    
    
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









    
    








