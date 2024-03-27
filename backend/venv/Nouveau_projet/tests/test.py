import requests

url = "http://127.0.0.1:5000/new_project"  # Assurez-vous de remplacer l'URL par celle de votre application
data = {
    "nom": "tp_sys",
    "niveau_id": 3,
    "module_id": 6,
    #"club_id": 1,
    "Tech_idiation": "Brainwriting",
    "user_id": 4,
    "favori": False,
    "projetMembers": [210, 41, 135, 49]
}

response = requests.post(url, json=data)

print(response.json())
