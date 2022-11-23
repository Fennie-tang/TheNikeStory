"use strict";

const { MongoClient } = require("mongodb")

require("dotenv").config()
const { MONGO_URI } = process.env
const { v4: uuid } = require("uuid")

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {

    await client.connect();
    const db = client.db("TheNikeStory");

    await db.collection("comments").insertOne({ ...req.body, _id: uuid() });
    res.status(201).json({ status: 201, data: req.body });

  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};

///returns all the Comments
const getAllComments = async (req, res) => {
  try {
    const sneakerId = req.params.sneakerId
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db("TheNikeStory");

    const allComments = await db.collection("comments").find().toArray();

    const sneakerComments = allComments.filter((comment) => comment.sneakerId === sneakerId)


    res.status(200).json({ status: 200, data: sneakerComments });
    client.close();
  } catch (err) {
    res.status(400).json({ status: 400, message: "Error! getting Shoe" });
  }
  client.close();
};

//update Comment
const updateComment = async (req, res) => {

  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("TheNikeStory");

  const _id = req.params._id
  const query = { _id }
  const newValues = { $set: { comment: req.body.comment } };

  if (req.body.comment === null) {
    return res.status(400).json({ status: 404, data: "Not Found" });
  }

  const result = await db.collection("comments").updateOne(query, newValues);

  res.status(200).json({ status: 200, _id, ...req.body, data: result });

  client.close();
};

//delete Comment
const deleteComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const _id = req.params._id

  await client.connect();
  const db = client.db("TheNikeStory");

  const result = await db.collection("comments").deleteOne({ _id: _id })
  console.log(result.deletedCount)

  if (result.deletedCount === 1) {
    res.status(204).json({ status: 204, _id })
  } else {
    res.status(400).json({ status: 404, data: "Not Found" });
  }
  client.close();

};

module.exports = {
  getAllComments,
  updateComment,
  deleteComment,
  createComment,

};