import requests

url = "http://127.0.0.1:5000/acceuil"  # Assurez-vous de remplacer l'URL par celle de votre application
data = {"user_id": 210}  # Remplacez 24 par l'ID de l'utilisateur que vous souhaitez tester


response = requests.get(url, json=data)




print(response.json())
