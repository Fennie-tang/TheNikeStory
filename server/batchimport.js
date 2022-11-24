const SneakersDataArray = require("./data/sneakers");

const { MongoClient } = require("mongodb")

require("dotenv").config()
const { MONGO_URI } = process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  console.log("hello")
  const client = await new MongoClient(MONGO_URI, options)
  await client.connect()
  console.log ("connected")

  try {
    const db = client.db("TheNikeStory")
    await db.collection("sneakers").insertMany(SneakersDataArray)

  }
  catch (err) {
    console.log(err);  
  }
  client.close()
  console.log("disconnected")
}

batchImport()
