from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL






auth = Blueprint("auth", __name__)
mysql = MySQL()

@auth.route('/register', methods=['POST'])
def register():
    print('register')