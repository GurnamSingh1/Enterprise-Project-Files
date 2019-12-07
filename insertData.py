import logging
import pymongo

logging.basicConfig(filename='insert.log',filemode='w',format='%(name)s - %(levelname)s - %(message)s')
logging.warning('This will get logged to file')

myclient = pymongo.MongoClient("mongodb://localhost:27017/")


mydb = myclient["The_HealthCare_Services"]
mycol1 = mydb["Hospitals"]

try:
 values1 = {"HospitalNo":"308","HospitalName":"Child Care","Address":"GreenBre rd","City":"Ottwa","State":"Ontario"}
 x = mycol1.insert_one(values1)
 for x in mycol1.find():
  print(x)
except Exception as e:
    logging.error("Exception occured", exc_info=True)


