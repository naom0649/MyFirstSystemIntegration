from fastapi import FastAPI;
import requests
import sys
sys.path.append(r'C:\Softwareudvikling\SystemIntergration\Mandatory I\MyFirstSystemIntegration\01a._ File_formats_bonanza\01._Program_Files\PYParser.py')
import PythonParser


app = FastAPI()

@app.get("/csvParser")
def _():
    CSV_Data = PythonParser.read_csv("Data_Files/me.csv")
    return CSV_Data

@app.get("/jsonParser")
def _():
    Json_Data = PythonParser.read_json("Data_Files/me.json")
    return Json_Data

@app.get("/xmlParser")
def _():
    Xml_Data = PythonParser.parse_xml("Data_Files/me.xml")
    return Xml_Data


#------------------------------------------------------------------------

@app.get("/csvExpress")
def _():

    url = "http://127.0.0.1:8080/csvParser"

    response = requests.get(url).json()

    return { "data" : response } 

@app.get("/jsonExpress")
def _():

    url = "http://127.0.0.1:8080/jsonParser"

    response = requests.get(url).json()

    return { "data" : response } 

@app.get("/xmlExpress")
def _():

    url = "http://127.0.0.1:8080/xmlParser"

    response = requests.get(url).json()

    return { "data" : response } 



  