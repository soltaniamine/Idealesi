from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL






admin= Blueprint("admin", __name__)
mysql = MySQL()





@admin.route('/add_module', methods=['POST'])
def add_module():
    data = request.get_json()
    user_id = data.get('user_id')
    nom_module = data.get('nom_module')
    niveau_module = data.get('niveau_module')

    # Check if the user is an administrator
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
    cur.close()

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401

    # Check if the module already exists in the database
    cur = mysql.connection.cursor()
    cur.execute("SELECT Module_ID FROM module WHERE Nom = %s", (nom_module,))
    existing_module = cur.fetchone()
    cur.close()

    if existing_module:
        return jsonify({'message': 'Module already exists'}), 400

    # Check if the level exists in the levels table
    cur = mysql.connection.cursor()
    cur.execute("SELECT Niveau_ID FROM Niveau WHERE Nom = %s", (niveau_module,))
    niveau_exists = cur.fetchone()
    cur.close()

    if not niveau_exists:
        return jsonify({'message': 'Level does not exist'}), 400
    niveau_id=niveau_exists[0]

    # Add the module to the database
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Module (Nom, Niveau_ID) VALUES (%s, %s)", (nom_module,niveau_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Module added successfully'}), 200


@admin.route('/add_club', methods=['POST'])
def add_club():
    data = request.get_json()
    user_id = data.get('user_id')
    nom_club = data.get('nom_club')
    file_path=data.get('path')
    
   

    # Vérifier si l'utilisateur est un administrateur
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
    cur.close()

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401

    # Vérifier si le club existe déjà dans la base de données
    cur = mysql.connection.cursor()
    cur.execute("SELECT Club_ID FROM Club WHERE Nom = %s", (nom_club,))
    existing_club = cur.fetchone()
    cur.close()
    
    if existing_club:
        return jsonify({'message': 'Club already exists'}), 400

    # Ajouter le club à la base de données
    cur = mysql.connection.cursor()
    
     # Vérifier si le fichier a été envoyé dans la requête
    if file_path:
      
       cur.execute("INSERT INTO Club (Nom,Photo) VALUES (%s,%s)", (nom_club,file_path,))
    else:
        cur.execute("INSERT INTO Club (Nom) VALUES (%s)", (nom_club,))  
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Club added successfully'}), 200

@admin.route('/add_niveau', methods=['POST'])
def add_niveau():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    nom_niveau = data.get('nom_niveau')
    cycle = data.get('cycle')
    user_id = data.get('user_id')

    # Vérifier si l'utilisateur est un administrateur
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
    cur.close()

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401
    

    # Vérifier si le cycle est une valeur valide
    if cycle not in ['Cycle preparatoire', 'Cycle superieur']:
        return jsonify({'message': 'Invalid cycle value'}), 400

    # Vérifier si le niveau existe déjà dans la base de données
    cur = mysql.connection.cursor()
    cur.execute("SELECT Niveau_ID FROM Niveau WHERE Nom = %s", (nom_niveau,))
    existing_niveau = cur.fetchone()

    # Si le niveau existe déjà, retourner un message d'erreur
    if existing_niveau:
        cur.close()
        return jsonify({'message': 'Niveau already exists'}), 400

    # Ajouter le niveau à la base de données
    cur.execute("INSERT INTO Niveau (Nom, Cycle) VALUES (%s, %s)", (nom_niveau, cycle))
    mysql.connection.commit()
    cur.close()

    # Retourner un message de succès
    return jsonify({'message': 'Niveau added successfully'}), 200


@admin.route('/delete_module', methods=['POST'])
def delete_module():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    nom_module=data.get('module_nom')
    
    # Vérifier si l'utilisateur est un administrateur
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
    

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401
    cur.execute("SELECT Module_ID FROM Module WHERE Nom = %s", (nom_module,))
    existing_module = cur.fetchone()
    if not existing_module:
        return jsonify({'message': 'Module does not exist'}), 400
    # Supprimer le module de la liste des modules
    module_id=existing_module[0]
    cur.execute("DELETE FROM Module WHERE Module_ID = %s", (module_id,))
    mysql.connection.commit()
  

    # Mettre à jour les références de module_id à NULL dans la table projet
  
    cur.execute("UPDATE Projet SET Module_ID = NULL WHERE Module_ID = %s", (module_id,))
    mysql.connection.commit()
    cur.close()

    # Retourner un message de succès
    return jsonify({'message': 'Module deleted successfully'}), 200


@admin.route('/delete_club', methods=['POST'])
def delete_club():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    # club_id = data.get('club_id')
    club_nom=data.get('club_nom')

    # Vérifier si l'utilisateur est autorisé à supprimer un club
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
   
    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401
    
    cur.execute("SELECT Club_ID FROM Club WHERE Nom = %s", (club_nom,))
    existing_club = cur.fetchone()
    if not existing_club:
        return jsonify({'message': 'Module does not exist'}), 400
    # Supprimer le module de la liste des modules
    club_id=existing_club[0]

    # Mettre à jour les projets associés en mettant club_id à NULL
    cur = mysql.connection.cursor()
    cur.execute("UPDATE Projet SET Club_ID = NULL WHERE Club_ID = %s", (club_id,))
    mysql.connection.commit()
    # Supprimer le club de la liste des clubs
  
    cur.execute("DELETE FROM Club WHERE Club_ID = %s", (club_id,))
    mysql.connection.commit()
    cur.close()
    
    return jsonify({'message': 'Club deleted successfully'}), 200


@admin.route('/delete_niveau', methods=['POST'])
def delete_niveau():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    niveau_nom=data.get('niveau_nom')

    # Vérifier si l'utilisateur est un administrateur
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
   
    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401
    
    cur.execute("SELECT Niveau_ID FROM niveau WHERE Nom = %s", (niveau_nom,))
    existing_niveau = cur.fetchone()
    if not existing_niveau:
        return jsonify({'message': 'Module does not exist'}), 400
    # Supprimer le module de la liste des modules
    niveau_id=existing_niveau[0]
    # Mettre à jour les références de module_id à NULL dans la table projet
    
    cur.execute("UPDATE Projet SET Module_ID = NULL,Niveau_ID = NULL WHERE Niveau_ID = %s", (niveau_id,))
    mysql.connection.commit()
    

    # Supprimer tous les modules associés dans la table Module
    cur.execute("DELETE FROM Module WHERE Niveau_ID = %s", (niveau_id,))
    mysql.connection.commit()
    # Supprimer le niveau de la table Niveau
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Niveau WHERE Niveau_ID = %s", (niveau_id,))
    mysql.connection.commit()

    
    cur.close()

    return jsonify({'message': 'Niveau and associated modules deleted successfully'}), 200


@admin.route('/add_prof', methods=['POST'])
def add_prof():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    prof_email = data.get('prof_email')
    user_id = data.get('user_id')

    if not prof_email.endswith("@esi.dz"):
        return jsonify({'message': 'not esi email'}), 401

    # Vérifier si l'utilisateur est un administrateur
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()
   

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401
    
        
    # Vérifier si le niveau existe déjà dans la base de données
   
    cur.execute("SELECT prof_ID FROM Prof WHERE email = %s", (prof_email,))
    existing_niveau = cur.fetchone()

    # Si le niveau existe déjà, retourner un message d'erreur
    if existing_niveau:
        cur.close()
        return jsonify({'message': 'prof already exists'}), 400
    nom=''
    # Ajouter le niveau à la base de données
    cur.execute("INSERT INTO Prof (email, nom) VALUES (%s, %s)", (prof_email, nom))
    mysql.connection.commit()
    cur.close()

    # Retourner un message de succès
    return jsonify({'message': 'prof added successfully'}), 200


# @admin.route('/delete_expert', methods=['POST'])
# def delete_expert():
#     # Récupérer les données JSON de la requête
#     data = request.get_json()
#     prof_email = data.get('prof_email')
#     user_id = data.get('user_id')
#     module_id = data.get('module_id')

#     # Vérifier si l'utilisateur est un administrateur
#     cur = mysql.connection.cursor()
#     cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
#     access = cur.fetchone()
    
    
#     if access and access[0] != "Administrateur":
#         return jsonify({'message': 'Unauthorized access'}), 401
    
        
#     # Vérifier si le niveau existe déjà dans la base de données
   
#     cur.execute("SELECT prof_ID FROM Prof WHERE email = %s", (prof_email,))
#     existing_prof = cur.fetchone()

#     # Si le niveau existe déjà, retourner un message d'erreur
#     if not existing_prof:
#         cur.close()
#         return jsonify({'message': 'prof does not exists'}), 400
#     prof_id=existing_prof
#     # supprimer l'expert de la base de données
#     cur.execute("DELETE FROM Listeprof WHERE Prof_ID = %s AND Module_ID=%s", (prof_id,module_id))
#     mysql.connection.commit()
#     cur.close()
      
#     # Retourner un message de succès
#     return jsonify({'message': 'prof deleted successfully'}), 200


@admin.route('/add_expert', methods=['POST'])
def add_expert():
    # Récupérer les données JSON de la requête
    data = request.get_json()

    user_id = data.get('user_id')
    module_id = data.get('module_id')

    print(module_id)
    cur = mysql.connection.cursor()
    cur.execute("SELECT Utilisateur.Type,Utilisateur.email,prof.prof_id FROM Utilisateur INNER JOIN Prof ON Utilisateur.email= Prof.email WHERE Utilisateur.user_id=%s", (user_id,))
    prof_info=cur.fetchone()
    if not prof_info:
         return jsonify({'message': 'prof does not exists'}), 400
    
    access,email,prof_id,=prof_info
    if access!="Utilisateur":
        return jsonify({'message': 'user is not a prof'}), 401
    
    cur.execute("SELECT prof_ID FROM ListeProf WHERE prof_ID = %s and module_id=%s", (prof_id,module_id,))
    existing_prof=cur.fetchone()
    print(existing_prof)
    if existing_prof:
        return jsonify({'message': 'Expert already exists'}), 402
    cur.execute("SELECT Module_ID FROM module WHERE module_id=%s", (module_id,))
    existing_module=cur.fetchone()
    if not existing_module:
        return jsonify({'message': 'module does not exists'}), 403
    
    
    cur.execute("INSERT INTO ListeProf (prof_id, module_id) VALUES (%s, %s)", (prof_id, module_id,))
    
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Expert Added successfully'}), 200

@admin.route('/liste_module_expert', methods=['POST'])
def liste_module_expert():
    data = request.get_json()
    user_id=data.get('user_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT Module_ID FROM listeprof WHERE Prof_ID = %s",(user_id))
    modules= cur.fetchall()
    liste_modules=[]
    for module in modules:
        module_id = module
        liste_modules.append({
            'module_id': module_id,
        })
    
    return jsonify({'message': 'List of modules returned successfully', 'modules': liste_modules}), 200


@admin.route('/delete_expert', methods=['POST'])
def delete_expert():
    # Récupérer les données JSON de la requête
    data = request.get_json()

    user_id = data.get('user_id')
    module_id = data.get('module_id')


    cur = mysql.connection.cursor()
    cur.execute("SELECT Utilisateur.Type,Utilisateur.email,prof.prof_id FROM Utilisateur INNER JOIN Prof ON Utilisateur.email= Prof.email WHERE Utilisateur.user_id=%s", (user_id,))
    prof_info=cur.fetchone()
    if not prof_info:
         return jsonify({'message': 'prof does not exists'}), 400
    
    access,email,prof_id,=prof_info
    if access!="Utilisateur":
        return jsonify({'message': 'user is not a prof'}), 401
    
    cur.execute("SELECT prof_ID FROM ListeProf WHERE prof_ID = %s and module_id=%s", (prof_id,module_id,))
    existing_prof=cur.fetchone()
    if not existing_prof:
        return jsonify({'message': 'Expert does not exist'}), 402
    cur.execute("SELECT Module_ID FROM module WHERE module_id=%s", (module_id,))
    existing_module=cur.fetchone()
    if not existing_module:
        return jsonify({'message': 'module does not exists'}), 403
    
    
    cur.execute("DELETE FROM ListeProf WHERE prof_id = %s AND module_id = %s", (prof_id, module_id,))
    
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Expert deleted successfully'}), 200
    
@admin.route('/add_event', methods=['POST'])
def add_event():
    data = request.get_json()
    user_id = data.get('user_id')
    nom_evenement = data.get('nom_evenement')
    club_id = data.get('club_id')
    file_path = data.get('photo_path')

    # Vérifier si l'utilisateur est un administrateur
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cursor.fetchone()
    cursor.close()
    print(club_id)
    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401

    # Vérifier si le club existe
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT Club_ID FROM Club WHERE Club_ID = %s", (club_id,))
    print(club_id)
    club_exists = cursor.fetchone()
    cursor.close()

    if not club_exists:
        return jsonify({'message': 'Club does not exist'}), 404

    # Vérifier si le fichier photo existe
    if not file_path:
        file_path = None
        
    
        

    # Insérer l'événement dans la base de données
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO evenements (Nom, photo, Club_ID) VALUES (%s, %s, %s)",
                   (nom_evenement, file_path, club_id,))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'Event added successfully'}), 200

@admin.route('/delete_event', methods=['POST'])
def delete_event():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    user_id = data.get('user_id')
    event_id = data.get('event_id')

    # Vérifier si l'utilisateur est autorisé à supprimer un événement
    cur = mysql.connection.cursor()
    cur.execute("SELECT Type FROM Utilisateur WHERE User_ID = %s", (user_id,))
    access = cur.fetchone()

    if access and access[0] != "Utilisateur":
        return jsonify({'message': 'Unauthorized access'}), 401

    # Vérifier si l'événement existe dans la base de données
    cur.execute("SELECT evenement_ID FROM evenements WHERE evenement_ID = %s", (event_id,))
    existing_event = cur.fetchone()

    if not existing_event:
        return jsonify({'message': 'Event does not exist'}), 400

    # Supprimer l'événement de la base de données
    cur.execute("DELETE FROM evenements WHERE evenement_ID = %s", (event_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Event deleted successfully'}), 200
