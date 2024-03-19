from flask import Flask, request, jsonify, urlfor
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'mahdi2004@'
app.config['MYSQL_DB'] = 'idealesi'

mysql = MySQL(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    username = data.get('username')

    if not email or not password or not username:
        return jsonify({'message': 'email and password are required'}), 400

    hashed_password = generate_password_hash(password)

    #verified has a default value of False and changes to true in the verification function
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users (email, password, username) VALUES (%s, %s, %s )", (email, hashed_password, username,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'welcome'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'enter email and passwrd'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT id, email, password, username, verified FROM users WHERE email = %s", (email,))
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

def verify_email(email):
    data = request.json
    verificationCode = data.get('verification_code')
    if not verificationCode:
        return jsonify({'error': 'verification code is required'}), 400

    verification_code=generate_verification_code()
    print(verification_code)

    send_verification_email(email,verification_code)


    # Check if verification code matches
    if verification_code != verificationCode:
        return jsonify({'error': 'Invalid verification code'}), 400

    cur = mysql.connection.cursor()
    cur.execute("UPDATE users SET verified = %s  WHERE email = %s", (True, email,))
    cur.connection.commit()
    cur.close()
   

    return jsonify({'message': 'Email verification successful. You can now log in.'}), 200

#same as verify_email with a difference of changing the password instead of verified instance.
@app.route("/forgot_password", methods=['POST'])

def resetPassword():
    data=request.json
    email=data.get('email')
    if not email:
        return jsonify({'error' : 'email is required'}), 400

    verification_code=generate_verification_code()
    print(verification_code)

    send_verification_email(email,verification_code)

    verificationCode=data.get('verification_code')

    # Check if verification code matches
    if verification_code != verificationCode:
        return jsonify({'error': 'Invalid verification code'}), 400

    newPassword= generate_password_hash(data.get('new_password'))


    cur= mysql.connection.cursor()
    cur.execute("UPDATE users SET password = %s WHERE email =%s", (newPassword, email,))
    cur.connection.commit()
    cur.close()

    return jsonify({'message': 'password changed successfully '})


#Generate a simple 4 digit code for verification
def generate_verification_code():
    return ''.join([str(random.randint(0, 9)) for _ in range(4)])

# NOT WORKING YET
#here i tried to use mailgun service but it did not seem to work
def send_verification_email(email, verific_code):
    # email parameters
    sender = "Excited User <mailgun@sandbox6ae5dca6ea7a42c38410cf7ab712d5a9.mailgun.org>"
    subject = "Verification Code"
    message = f"Your verification code is: {verific_code}"

    # Send email via Mailgun API
    response = requests.post(
        "https://api.mailgun.net/v3/sandbox6ae5dca6ea7a42c38410cf7ab712d5a9.mailgun.org/messages",
        auth=("api", "e81e7557a8097da30082a788d800be9a-309b0ef4-7142b726"),
        data={"from": sender,
              "to": email,
              "subject": subject,
              "text": message}
    )
    print(response.status_code)
    print(response.content)

    if response.status_code == 200:
        print ('Email sent successfully!')
    else:
        print ('Failed to send email!')


if __name__ == '__main__':
    app.run(debug=True)
