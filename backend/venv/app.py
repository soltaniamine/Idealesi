from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

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
    cur.execute("SELECT id, email, password, username FROM users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
   

    if not user:
        return jsonify({'message': 'User not found'}), 404

    user_id, user_email, hashed_password, user_name, = user

    if check_password_hash(hashed_password, password):
        return jsonify({'message': 'Login successful', 'user_id': user_id}), 200
    else:
        return jsonify({'message': 'wrong passwrd/email'}), 401


if __name__ == '__main__':
    app.run(debug=True)
