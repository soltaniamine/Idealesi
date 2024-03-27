import requests

url = "http://127.0.0.1:5000/update_project_name"  # Assurez-vous de remplacer l'URL par celle de votre application
data = {
    "projet_id": 1,  # Remplacez 1 par l'ID du projet que vous souhaitez mettre à jour
    "new_name": "projet2cp",  # Remplacez "Nouveau nom du projet" par le nouveau nom souhaité
    "user_id": 24
}


response = requests.put(url, json=data)

print(response.json())
