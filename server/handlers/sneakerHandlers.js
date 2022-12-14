"use strict";

const { MongoClient } = require("mongodb")

require("dotenv").config()
const { MONGO_URI } = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

///returns all the Sneakers
const getAllSneakers = async (req, res) => {
    const client = await new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db("TheNikeStory");

        const allSneakers = await db.collection("sneakers").find().toArray();
        console.log(allSneakers);


        res.status(200).json({ status: 200, data: allSneakers });
        // client.close();
    } catch (err) {
        res.status(400).json({ status: 400, message: "Error! getting Shoe" });
    }
    client.close();
};

// returns specific Sneaker
const getSneaker = async (req, res) => {
    const client = await new MongoClient(MONGO_URI, options)
    try {
        const _id = (req.params._id)
        await client.connect()

        const db = client.db("TheNikeStory")

        const selectedSneaker = await db.collection("sneakers").findOne({ _id: _id })
        res.status(200).json({ status: 200, data: selectedSneaker })
        // client.close();
    } catch (err) {
        res.status(400).json({ status: 400, message: "Error! getting sneaker" })
    }

    client.close();
};

module.exports = {
    getAllSneakers,
    getSneaker,
};