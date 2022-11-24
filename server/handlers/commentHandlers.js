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
  console.log("hello", req.body)
  const client = new MongoClient(MONGO_URI, options);
  try {

    await client.connect();
    const db = client.db("TheNikeStory");

    const comment = req.body.newComment;
    const user = req.body.email;

    const sneakerComments = await db.collection("sneakers").findOne({ _id: req.body._id }) // find the sneaker

    if (sneakerComments.comments) {
      sneakerComments.comments.push({ user: user, comment: comment })

      await db.collection("sneakers").updateOne({ _id: req.body._id }, { $set: { comments: sneakerComments.comments } })
      return res.status(201).json({ status: 201, data: req.body });
    } else {
      await db.collection("sneakers").updateOne({ _id: req.body._id }, { $set: { comments: [{ user: user, comment: comment }] } })
      return res.status(201).json({ status: 201, data: req.body });
    }


  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};

///returns all the Comments
const getAllComments = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  try {
    const sneakerId = req.params.sneakerId

    await client.connect();

    const db = client.db("TheNikeStory");

    const allComments = await db.collection("sneakers").find().toArray();

    const sneakerComments = allComments.filter((comment) => comment._id === sneakerId)


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
  const user = req.params.user


  const sneakerComments = await db.collection("sneakers").findOne({ _id: _id })

  const updatedComments = sneakerComments.comments.map((comment) => comment.user === user ? { user: user, comment: req.body.comment } : comment)

  await db.collection("sneakers").updateOne({ _id: _id }, { $set: { comments: updatedComments } })


  if (req.body.comment === null) {
    return res.status(400).json({ status: 404, data: "Not Found" });
  }

  res.status(200).json({ status: 200, _id, data: req.body });

  client.close();
};

//delete Comment
const deleteComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const _id = req.params._id
    const user = req.params.user

    await client.connect();
    const db = client.db("TheNikeStory");

    const sneakerComments = await db.collection("sneakers").findOne({ _id: _id })

    const updatedComments = sneakerComments.comments.filter((comment) => comment.user !== user)

    await db.collection("sneakers").updateOne({ _id: _id }, { $set: { comments: updatedComments } })


    res.status(204).json({ status: 204, _id })
  } catch (err) {
    res.status(404).json({ status: 404, message: "comment was not deleted" })
  }
  client.close();

};

module.exports = {
  getAllComments,
  updateComment,
  deleteComment,
  createComment,

};