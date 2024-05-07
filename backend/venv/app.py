from flask import Flask, request, jsonify, url_for
from flask_mysqldb import MySQL
from flask_mailman import Mail, EmailMessage
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS, cross_origin
import random
import ssl
import smtplib
from os import getenv
import google.generativeai as genai

mail = Mail()

app = Flask(__name__)
CORS(app, support_credentials=True) 

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USERNAME"] = "EMAIL"
app.config["MAIL_PASSWORD"] = "PASSWORD"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False

mail.init_app(app)
# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'USER'
app.config['MYSQL_PASSWORD'] = 'PASSWORD'
app.config['MYSQL_DB'] = 'mydb'

mysql = MySQL(app)

@app.route('/register', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    username = data.get('username')

    if not username:
        return jsonify({'message': 'reset username'}), 400
    if not email :
        return jsonify({'message': 'reset email'}), 401
    if not password :
        return jsonify({'message': 'reset password'}), 402
    

    hashed_password = generate_password_hash(password)
    message = generate_verification_code()
    send_mail(email,message)
    #verified has a default value of False and changes to true in the verification function
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO utilisateur (email, password, username, verifycode) VALUES (%s, %s, %s, %s )", (email, hashed_password, username,message))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'welcome'}), 201

@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'enter email and passwrd'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT User_ID, email, password, username, verified FROM Utilisateur WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
   

    if not user:
        return jsonify({'message': 'User not found'}), 404

    user_id, user_email, hashed_password, user_name, user_verified = user

    if not user_verified:
        return jsonify({'message' : 'verify your email'})

#rediriction to email verification with user_email as instance 

    if check_password_hash(hashed_password, password):
        return jsonify({'message': 'Login successful', 'user_id': user_id}), 200
    else:
        return jsonify({'message': 'wrong passwrd/email'}), 401

#we send a verification email to the user and after entering the four degits we change the state of the account to verified
@app.route('/verify_email', methods=['POST'])
@cross_origin(supports_credentials=True)
def verify_email():
    data = request.json
    email = data.get('email')
    verificationCode = data.get('verification')
    if not email :
        return jsonify({'error': 'email is required'}), 400
    
    if not verificationCode:
        return jsonify({'error': 'verification code is required'}), 401

    # Fetch the verification code from the database
    cur = mysql.connection.cursor()
    cur.execute("SELECT verifycode FROM utilisateur WHERE email = %s", (email,))
    verifycode = cur.fetchone()
    cur.close()


    if not verifycode:
        return jsonify({'error': 'No verification code found for the given email'}), 404
    
    # Check if verification code matches
    if str(verifycode[0]).strip().lower() != str(verificationCode).strip().lower():
        return jsonify({'error': 'Invalid verification code'}), 402


    cur = mysql.connection.cursor()
    cur.execute("UPDATE utilisateur SET verified = %s  WHERE email = %s", (True, email,))
    cur.connection.commit()
    cur.close()

    return jsonify({'message': 'Email verification successful. You can now log in.'}), 200


#same as verify_email with a difference of changing the password instead of verified instance.
@app.route('/forgot_password', methods=['POST'])
@cross_origin(supports_credentials=True)
def resetPassword():
    data=request.get_json()
    email=data.get('email')
    passw = data.get('new_password')
    print(email)
    print(passw)
    if not email:
        return jsonify({'error' : 'email is required'}), 400
    if not passw:
        return jsonify({'error' : 'new password is required'}), 401

    # message = generate_verification_code()
    # send_mail(email,message)

    # verificationCode=data.get('verification_code')

    # # Check if verification code matches
    # if message != verificationCode:
    #     return jsonify({'error': 'Invalid verification code'}), 400

    newPassword= generate_password_hash(passw)


    cur= mysql.connection.cursor()
    cur.execute("UPDATE users SET password = %s WHERE email =%s", (newPassword, email,))
    cur.connection.commit()
    cur.close()

    return jsonify({'message': 'password changed successfully '})


#Generate a simple 4 digit code for verification
def generate_verification_code():
    return ''.join([str(random.randint(0, 9)) for _ in range(4)])


def send_mail(email, message):
    msg = EmailMessage(
        "IdealESI - Code de Verification",
        f"Le code d'activation de votre email est: {message}  Merci",
        "lm_soltani@esi.dz",
        [email]  
    )
    msg.send()
    return jsonify({'message': 'email sent successfully '})




@app.route('/nom_projet', methods=['POST'])
def nom_projet():
    data = request.get_json()
    projet_id= data.get('projet_id')
    cur = mysql.connection.cursor()
    cur.execute("SELECT nom FROM projet WHERE projet_id = %s", (projet_id,))
    nom, = cur.fetchone()
    cur.close()
    return jsonify({'message': 'nom returned successfully','nom':nom}), 200




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




@app.route('/chatbot', methods=['POST'])
def chatbot():
    # Récupérer les données JSON de la requête
    data = request.get_json()
    message = data.get('message')
    convo.send_message(message)
    reponse=convo.last.text
    return jsonify({'message': 'Chatbot answered successfully','reponse':reponse}), 200


if __name__ == '__main__':
    app.run(debug=True)
