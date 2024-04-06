from flask import Flask, request, jsonify,Blueprint
from flask_mysqldb import MySQL






board = Blueprint("board", __name__)
mysql = MySQL()

@board.route('/board', methods=['GET'])
def register():
    print('board')
    return jsonify({'message': 'board bleuprint'}), 200