# Store this code in 'app.py' file

from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import bcrypt
import MySQLdb.cursors
import re


app = Flask(__name__)


app.secret_key = 'your secret key'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'mahdi2004@'
app.config['MYSQL_DB'] = 'idealesi'


'''def hash_password(password, salt):
    # Hashes a password using bcrypt.

    # Encode the password as bytes
    password_bytes = password.encode('utf-8')

    # Hash the password with the salt
    hashed_password = bcrypt.hashpw(password_bytes, salt)

    return hashed_password
'''

mysql = MySQL(app)

@app.route('/')
@app.route('/login', methods =['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        account = cursor.fetchone()

        if account:
            #stored_hashed_password = account['password']
            #stored_salt = account['salt']
            stored_password = account['password']

            # Hash the input password with the stored salt
            #hashed_input_password = hash_password(password, stored_salt)

            # Compare the hashed input password with the stored hashed password
            #if hashed_input_password == stored_hashed_password:
            if password == stored_password:
                session['loggedin'] = True
                session['id'] = account['user_id']
                session['email'] = account['email']
                msg = 'Logged in successfully !'
                return render_template('index.html', msg=msg)
            else:
                msg = 'Incorrect email / password !'
        else:
            msg = 'User does not exist !'

    return render_template('login.html', msg=msg)


@app.route('/logout')
def logout():
	session.pop('loggedin', None)
	session.pop('id', None)
	session.pop('username', None)
	return redirect(url_for('login'))

@app.route('/register', methods =['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form :
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE email = % s', (email, )) 
        account = cursor.fetchone()
        salt = bcrypt.gensalt()
        if account:
            msg = 'Account already exists !'
        
        elif not re.match(r'[^@]+@esi.dz$', email):
            msg = 'Invalid email address ! use your esi.dz address'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers !'
        elif not username or not password or not email:
            msg = 'Please fill out the form !'
        else:
            cursor.execute('INSERT INTO users VALUES (NULL, % s, % s, % s, % s)', (username, password, email, salt, ))
            mysql.connection.commit()
            msg = 'You have successfully registered !'
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    return render_template('register.html', msg=msg)




if __name__ == '__main__':
    app.run(debug=True)