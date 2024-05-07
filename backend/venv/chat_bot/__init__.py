from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL
import google.generativeai as genai





chat_bot = Blueprint("chat_bot", __name__)
mysql = MySQL()


genai.configure(api_key="AIzaSyAAw8ar21fcvLsxA7-_SGg7UbHlfbpFWy0")


# Set up the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}


safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]


model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              safety_settings=safety_settings)


convo = model.start_chat(history=[
])



@chat_bot.route('/chatbot', methods=['POST'])
def chatbot():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    message = data.get('message')
    convo.send_message(message)
    reponse=convo.last.text
    return jsonify({'message': 'Chatbot answered successfully','reponse':reponse}), 200
