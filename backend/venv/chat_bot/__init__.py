from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL






chat_bot = Blueprint("chat_bot", __name__)
mysql = MySQL()

@chat_bot.route('/chat_bot', methods=['POST'])
def register():
    print('chat_bot')