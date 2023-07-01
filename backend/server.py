from flask import Flask, request
from DBHelper import DBHelper
from AuthHelper import AuthHelper

app = Flask(__name__)

DB_FILE = 'database.db'
db = DBHelper(DB_FILE)


@app.route('/healthcheck')
def healthcheck():
    return 'Hello, World!'


@app.route('/user/login', methods=['POST'])
def login(name):
    email = request.json.get('email')
    password = request.json.get('password')

    # vou armazenar senha em plaintext mesmo, quem tiver a disposição de trocar pra hash + salt, sinta-se livre...
    # pode usar a sha356
    query = DBHelper.execute_query("SELECT (ID, NAME, PASSWORD) FROM USER WHERE (EMAIL=:email)", fetch=True, params={'email':email})
    if len(query) == 0:
        return {'message': 'Usuário ou senha incorretos'}, 401

    cpf, name, pwd = query[0]
    if password != pwd:
        return {'message': 'Usuário ou senha incorretos'}, 401

    # gera um authentication code através do cpf. esse auth vai ser sempre o mesmo para esse cpf
    jwt = AuthHelper.generate_token(cpf)
    return {'auth': jwt, 'name': name}, 200


@app.route('/user/register', methods=['POST'])
def register_user():
    name = request.json.get('nome_completo')
    cpf = request.json.get('cpf')
    email = request.json.get('email')
    pwd = request.json.get('senha')
    phone_number = request.json.get('telefone')
    CEP = request.json.get('CEP')
    num_res = request.json.get('num_res')
    comp = request.json.get('complemento')

    query = db.execute_query("SELECT * FROM USER WHERE (EMAIL = :email or CPF = :cpf)", fetch=True, params={'email':email, 'cpf':cpf})
    if len(query) > 0:
        return {'message': 'CPF ou email já estão em uso'}, 409

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
    db.execute_query("INSERT INTO USER (CPF, EMAIL, NAME, PASSWORD, PHONE, CEP, NUM_RES, COMP) VALUES (:cpf, :email, :name, :pwd, :phone, :cep, :num_res, :comp)", params=params)
    return {'message': "Conta cadastrada com sucesso"}, 201


if __name__ == '__main__':
    app.run()
