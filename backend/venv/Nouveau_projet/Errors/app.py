from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'khalil'
app.config['MYSQL_DB'] = 'mydb'

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
    favori=data.get('favori')
    projetMembers = data.get('projetMembers', [])
    if not nom:
        nom="nouveau_projet"
        
    cur = mysql.connection.cursor()
    
    if tech_idiation not in ["Brainstorming", "Brainwriting"]:
        return jsonify({'message': 'Invalid value for Tech_idiation'}), 400
    

    cur.execute("INSERT INTO Projet (nom, Niveau_ID, Module_ID, Club_ID, Tech_idiation) VALUES (%s, %s, %s, %s, %s)",(nom, niveau_id, module_id, club_id, tech_idiation,))
    mysql.connection.commit()
    # projet_id = cur.lastrowid #recuperer l'id du projet (projet_id)
    # access="Admin"
    # cur.execute("INSERT INTO ProjetMembers (User_ID, Projet_ID, Access,Favori) VALUES (%s, %s, %s,%s)", (user_id, projet_id, access,favori,))
    # mysql.connection.commit()
    
    # access="Mod" 

    # for member_id in projetMembers:
    #     cur.execute("INSERT INTO ProjetMembers (User_ID, Projet_ID, Access,Favori) VALUES (%s, %s, %s,%s)", (member_id, projet_id, access,favori,))
    
    #     mysql.connection.commit()

    cur.close()
    return jsonify({'message': 'Created new project successfully'}), 200
# , 'projet_id': projet_id