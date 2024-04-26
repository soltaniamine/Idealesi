from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from gest_projet import *
from auth import *
from board import *
from chat_bot import *
from chat import *
from admin import *
from flask_mailman import Mail, EmailMessage

app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'khalil'
app.config['MYSQL_DB'] = 'test2'


mail = Mail()
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USERNAME"] = "EMAIL"
app.config["MAIL_PASSWORD"] = "PASSWORD"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
mail.init_app(app)


mysql = MySQL(app)

app.register_blueprint(gest_projet)
app.register_blueprint(auth)
app.register_blueprint(board)
app.register_blueprint(chat_bot)
app.register_blueprint(chat)
app.register_blueprint(admin)


if __name__ == '__main__':
    app.run(debug=True)







    
    








