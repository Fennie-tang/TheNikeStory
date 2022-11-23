const express = require('express');
const helmet = require("helmet");
const morgan = require('morgan');

const PORT = 8000

const { getAllSneakers, getSneaker } = require('./handlers/sneakerHandlers');
const { getAllComments, updateComment, deleteComment, createComment } = require('./handlers/commentHandlers');
express()

  .use(express.json())
  .use(helmet())
  .use(morgan('tiny'))

  .get('/hello', (req, res) => {
    res.status(200).json({ status: 200, message: 'Hello World!' })
  })
  ///sneakers
  .get("/getAllSneakers", getAllSneakers)
  .get("/getSneaker/:_id", getSneaker)

  ///comments
  .get("/getAllComments/:sneakerId", getAllComments)
  .post("/createComment", createComment)
  .patch("/updateComment/:_id", updateComment)
  .delete("/deleteComment/:_id", deleteComment)



  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });