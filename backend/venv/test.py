import requests

def test_search_club():
    url = 'http://127.0.0.1:5000/search_club'  # Remplacez par l'URL appropriée si nécessaire
   
    data = {
        'mot_cle': 'c'  # Remplacez 'football' par le mot clé que vous souhaitez tester
    }

    # Envoi de la requête POST
    response = requests.post(url, json=data)

    # Affichage des résultats
    print('Status Code:', response.status_code)
    print('Response Body:', response.json())


def test_search_module():
    url = 'http://127.0.0.1:5000/search_module'  # Ajustez l'URL selon votre configuration
    data = {'mot_cle': 'ana'}  # Modifiez avec le mot-clé que vous souhaitez rechercher

    # Envoi de la requête GET
   
    response = requests.get(url, json=data)

    # Affichage des résultats
    print('Status Code:', response.status_code)
    print('Response Body:', response.json())


def test_search_project():
    url = 'http://127.0.0.1:5000/search_project'  # Ajustez l'URL selon votre configuration
    headers = {'Content-Type': 'application/json'}

    # Données à envoyer avec la requête POST
    data = {
        'user_id': 1,  # Assurez-vous que cet utilisateur existe dans votre base de données
        #  'keyword': '',
        'filters': {
             'admin_email': 'lm_soltani@esi.dz',  # Assurez-vous que cet email correspond à un utilisateur
            # 'club_name': 'Club Scientifique',
               'module_name': 'ana',
               'niveau_name': '2CP',
            # 'favori': True
        },
        'sort_by': 'projet.date_creation DESC'
    }

    # Envoi de la requête POST
    response = requests.post(url, json=data, headers=headers)

    # Affichage des résultats
    print('Status Code:', response.status_code)
    print('Response Body:', response.json())

def test_projet_members():
    url = 'http://127.0.0.1:5000/projet_members'  # Ajustez l'URL selon votre configuration
   
    # Données à envoyer avec la requête POST
    data = {
        'projet_id': 43  # Remplacez '123' par un projet_id valide de votre base de données
    }

    # Envoi de la requête POST
    response = requests.post(url, json=data)

    # Affichage des résultats
    print('Status Code:', response.status_code)
    print('Response Body:', response.json())

def test_module_experts():
    url = 'http://127.0.0.1:5000/module_experts'  # Adjust the URL if needed
    data = {'module_id': 19}  # Change '123' to a valid module_id you wish to test

    # Sending GET request with module_id as a query parameter

    response = requests.get(url, json=data)

    # Print the status code and the JSON response
    print('Status Code:', response.status_code)
    print('Response JSON:', response.json())
if __name__ == '__main__':
    test_module_experts()
