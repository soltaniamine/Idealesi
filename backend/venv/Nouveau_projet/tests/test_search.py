import requests

url = "http://127.0.0.1:5000/search_projects"  # Assurez-vous de remplacer l'URL par celle de votre application
data = {
    "user_id":24,  # Remplacez par l'ID de l'utilisateur concerné
    "filters": {
        "club_id": 1,  # Filtre facultatif - Remplacez par l'ID du club (facultatif)
        #"module_id": 1,  # Filtre facultatif - Remplacez par l'ID du module (facultatif)
        #"niveau_id": 4,  # Filtre facultatif - Remplacez par l'ID du niveau (facultatif)
        #"favori": False  # Filtre facultatif - Remplacez par True ou False selon le favori (facultatif)
    },
    "keyword": "p",  # Mot-clé de recherche (facultatif)
    #"sort_by": "projet.nom"  # Champ de tri (facultatif)
}

response = requests.post(url, json=data)

print(response.json())
