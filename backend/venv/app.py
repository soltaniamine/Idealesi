from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from gest_projet import *
from auth import *
from board import *
from chat_bot import *
from chat import *


app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'khalil'
app.config['MYSQL_DB'] = 'test2'

mysql = MySQL(app)

app.register_blueprint(gest_projet)
app.register_blueprint(auth)
app.register_blueprint(board)
app.register_blueprint(chat_bot)
app.register_blueprint(chat)

if __name__ == '__main__':
    app.run(debug=True)







    
    








