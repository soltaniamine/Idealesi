from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL






chat = Blueprint("chat", __name__)
mysql = MySQL()

@chat.route('/chat', methods=['GET'])
def register():
    print('chat')
    return jsonify({'message': 'chat bleuprint'}), 200