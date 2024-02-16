import express from "express";

import "./config/db.js";
import "./controlers/post.controler.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
} from "./controlers/post.controler.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app
  .get("/", function (req, res) {
    res.status(200).send("Hello World...!!!");
  })
  .get("/posts", getAllPosts)
  .get("/post/:title", getOnePost)
  .post("/post", createPost)
  .delete("/post/:id", deletePost)
  .put("/post/:id", updatePost);

app.listen(PORT, function () {
  console.log(`The server is listening on port ${PORT}`);
});
