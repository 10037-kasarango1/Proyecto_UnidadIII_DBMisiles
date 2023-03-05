from flask import Flask, request
import json
import cx_Oracle
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def getConnection():
    return cx_Oracle.connect(user="ksarango4", password="Oracle69849",
                               dsn="localhost:1521/DBMisiles",
                               encoding="UTF-8")

def convertirItemAJson(item):
    return json.loads(item[0])

def convertirAJson(array):
    return list(map(convertirItemAJson, array))

@app.route('/misiles')
@cross_origin()
def obtenerMisiles():
    connection = getConnection()
    cur = connection.cursor()
    cur.execute("SELECT json_object(*) FROM tb_misil")
    res = cur.fetchall()
    return convertirAJson(res)

@app.route('/get-misiles', methods=['GET'])
@cross_origin()
def getMisiles():
    args = request.args
    id_misil = args.get("id_misil")
    connection = getConnection()
    cur = connection.cursor()
    res = cur.callfunc("get_misiles_fn", cx_Oracle.CURSOR,[id_misil]).fetchall()
    connection.commit()
    return convertirAJson(res)

@app.route('/crear-misil', methods=['POST'])
@cross_origin()
def crearMisil():
    misil = request.get_json().get("data")
    id_misil = misil.get("id_misil")
    nombre_mis = misil.get("nombre_mis")
    tipo_mis = misil.get("tipo_mis")
    fecha_entrega_mis = misil.get("fecha_entrega_mis")
    status_mis = misil.get("status_mis")
    index_mis = misil.get("index_mis")
    
    connection = getConnection()
    cur = connection.cursor()
    res= ''
    cur.callproc("sp_crear_misil", [id_misil, nombre_mis, tipo_mis, fecha_entrega_mis, status_mis, index_mis, res])
    connection.commit()
    return res
