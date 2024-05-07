from flask import Flask, request, jsonify, url_for
from flask_mysqldb import MySQL
from flask_mailman import Mail, EmailMessage
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS, cross_origin
import random
import ssl
import smtplib
from os import getenv
from gest_projet import *
from auth import *
from board import *
from chat_bot import *
from chat import *
from admin import *
mail = Mail()

app = Flask(__name__)
CORS(app, support_credentials=True) 

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USERNAME"] = "idealesi@esi.dz"
app.config["MAIL_PASSWORD"] = "Projet@2CP"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False

mail.init_app(app)
# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Branis@2016'
app.config['MYSQL_DB'] = 'mydb'

mysql = MySQL(app)
app.register_blueprint(gest_projet)
app.register_blueprint(auth)
app.register_blueprint(board)
app.register_blueprint(chat_bot)
app.register_blueprint(chat)
app.register_blueprint(admin)


if __name__ == '__main__':
    app.run(debug=True)
