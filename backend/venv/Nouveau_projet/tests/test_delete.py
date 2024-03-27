import requests

url = "http://127.0.0.1:5000/delete_project"
data = {
    "user_id": 117,
    "projet_id": 2,
    "access": "Admin"  # ou "Mod" en fonction de l'accès de l'utilisateur
}

response = requests.delete(url, json=data)

print(response.json())
