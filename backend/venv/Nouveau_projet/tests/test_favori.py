import requests

url = "http://127.0.0.1:5000/update_project_favori"  # Assurez-vous de remplacer l'URL par celle de votre application
data = {
    "projet_id": 1,  # Remplacez 1 par l'ID du projet que vous souhaitez mettre à jour
    "new_favori_state": True,  # Remplacez True par le nouvel état favori souhaité (True ou False)
    "user_id": 24  # Remplacez 1 par l'ID de l'utilisateur qui effectue la mise à jour
}

response = requests.put(url, json=data)

print(response.json())
