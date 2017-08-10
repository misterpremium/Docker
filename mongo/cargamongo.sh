docker run -p 27017:27017 -d dani/mongo
mongoimport -d node-mongo-recipe -c recipes --type json --file prueba.json --jsonArray
mongoimport -d node-mongo-recipe -c total --type json --file Total.json --jsonArray

mongoimport -d node-mongo-recipe -c pts --type json --file pts.json --jsonArray
