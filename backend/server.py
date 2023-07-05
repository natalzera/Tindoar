from flask import Flask, request
from flask_cors import CORS
from DBHelper import DBHelper as db
from AuthHelper import AuthHelper
from DonationsHelper import DonationsHelper

app = Flask(__name__)
CORS(app)

@app.route('/healthcheck')
def healthcheck():
    return 'Hello, World!'

@app.route('/user/login', methods=['POST'])
def login_client():
    email = request.json.get('email')
    password = request.json.get('password')

    if None in [email, password]:
        return {'message': 'Email and password cannot be null'}, 400

    # vou armazenar senha em plaintext mesmo, quem tiver a disposição de trocar pra hash + salt, sinta-se livre...
    # pode usar a sha356
    query = db.execute_query("SELECT cpf, name, password FROM CLIENT WHERE (email=:email)", fetch=True, params={'email':email})
    if len(query) == 0:
        return {'message': 'Invalid user or password'}, 401

    cpf, name, pwd = query[0]
    if password != pwd:
        return {'message': 'Invalid user or password'}, 401

    # gera um authentication code através do cpf. esse auth vai ser sempre o mesmo para esse cpf
    jwt = AuthHelper.generate_token(cpf)
    return {'auth': str(jwt), 'name': name}, 200

@app.route('/user/register', methods=['POST'])
def register_client():
    name = request.json.get('name')
    cpf = request.json.get('cpf')
    email = request.json.get('email')
    pwd = request.json.get('password')
    phone_number = request.json.get('phone_number')
    CEP = request.json.get('CEP')
    num_res = request.json.get('num_res')
    comp = request.json.get('comp')

    if None in [cpf, email, pwd]:
        return {'message': 'CPF, email and password cannot be null'}, 400

    query = db.execute_query("SELECT * FROM CLIENT WHERE (email = :email or cpf = :cpf)", fetch=True, params={'email':email, 'cpf':cpf})
    if len(query) > 0:
        return {'message': 'CPF or email are already in use.'}, 409

    params = {
        'cpf': cpf,
        'email': email,
        'name': name,
        'pwd': pwd,
        'phone': phone_number,
        'cep': CEP,
        'num_res': num_res,
        'comp': comp
    }
    db.execute_query("INSERT INTO CLIENT (cpf, email, name, password, phone, cep, num_res, comp) VALUES (:cpf, :email, :name, :pwd, :phone, :cep, :num_res, :comp)", params=params)
    return {'message': "Successfully registered!"}, 201

@app.route('/entity/login', methods=['POST'])
def login_entity():
    email = request.json.get('email')
    password = request.json.get('password')

    if None in [email, password]:
        return {'message': 'Email and password cannot be null'}, 400

    # vou armazenar senha em plaintext mesmo, quem tiver a disposição de trocar pra hash + salt, sinta-se livre...
    # pode usar a sha356
    query = db.execute_query("SELECT cnpj, name, password FROM ENTITY WHERE (email=:email)", fetch=True, params={'email':email})
    if len(query) == 0:
        return {'message': 'Invalid user or password'}, 401

    cpf, name, pwd = query[0]
    if password != pwd:
        return {'message': 'Invalid user or password'}, 401

    # gera um authentication code através do cpf. esse auth vai ser sempre o mesmo para esse cpf
    jwt = AuthHelper.generate_token(cpf)
    return {'auth': jwt, 'name': name}, 200

@app.route('/entity/register', methods=['POST'])
def register_entity():
    name = request.json.get('name')
    cnpj = request.json.get('cnpj')
    email = request.json.get('email')
    pwd = request.json.get('password')
    phone_number = request.json.get('phone_number')
    CEP = request.json.get('CEP')
    num_res = request.json.get('num_res')
    comp = request.json.get('comp')

    if None in [cnpj, email, pwd]:
        return {'message': 'CNPJ, email and password cannot be null'}, 400

    query = db.execute_query("SELECT * FROM ENTITY WHERE (email = :email or cnpj = :cnpj)", fetch=True, params={'email':email, 'cnpj':cnpj})
    if len(query) > 0:
        return {'message': 'CPF or email are already in use.'}, 409

    params = {
        'cnpj': cnpj,
        'email': email,
        'name': name,
        'pwd': pwd,
        'phone': phone_number,
        'cep': CEP,
        'num_res': num_res,
        'comp': comp
    }
    db.execute_query("INSERT INTO ENTITY (cnpj, email, name, password, phone, cep, num_res, comp) VALUES (:cnpj, :email, :name, :pwd, :phone, :cep, :num_res, :comp)", params=params)
    return {'message': "Successfully registered!"}, 201


@app.route('donations', methods=['GET'])
def get_donations():
    donations = DonationsHelper.get_donations()

    return donations, 200

if __name__ == '__main__':
    app.run()
