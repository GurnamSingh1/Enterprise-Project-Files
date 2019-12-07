import logging
import pymongo

logging.basicConfig(filename='Document.log',filemode='w',format='%(name)s - %(levelname)s - %(message)s')
logging.warning('This will get logged to file')

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["The_HealthCare_Services"]
mycol1 = mydb["Hospitals"]


try:
    print("Documents of customer collection: ")
    for x in mycol1.find():
     print(x)
except Exception as e:
    logging.error("Exception occured", exc_info=True)

