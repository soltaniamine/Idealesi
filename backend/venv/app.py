from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from Utils import *



app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'khalil'
app.config['MYSQL_DB'] = 'test2'

mysql = MySQL(app)

app.register_blueprint(gest_projet)



if __name__ == '__main__':
    app.run(debug=True)







    
    








