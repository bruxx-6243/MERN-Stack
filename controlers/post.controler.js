import { Post } from "../models/post.model.js";

/**
 * Public GET / posts: get all posts from the server
 */

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return res.status(200).send(posts);
  } catch (err) {
    return res.status(500).send(err);
  }
}

/**
 * Public GET / post: get one post from the server
 */
export async function getOnePost(req, res) {
  try {
    const post = await Post.find({ title: req.params.title });

    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send(err);
  }
}

/**
 * Public POST / posts: get all posts from the server
 */
export async function createPost(req, res) {
  const { title, content, author, categories, upvotes } = req.body;

  if (!title && !content && !author && !categories) {
    return res.status(400).send("Missing parameters");
  }

  try {
    const post = await Post.create({
      title,
      content,
      author,
      categories,
      upvotes,
    });

    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).json({ status: err.status, message: err.message });
  }
}

/**
 * Public DELETE / post: Delete a single post his id
 */

export async function deletePost(req, res) {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id });
    if (!deletedPost) {
      return res.status(404).send("Post not found");
    }

    return res.status(200).send(deletedPost);
  } catch (err) {
    return res.status(500).json({ status: err.status, message: err.message });
  }
}

/**
 * Public PUT / post: Update a single post his id
 */

export async function updatePost(req, res) {
  const { title, content, author, categories } = req.body;

  if (!title && !content && !author && !categories) {
    return res
      .status(400)
      .json({
        status: 400,
        message: "Please provide a parameter to update or close the modal",
      });
  }

  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      {
        title,
        content,
        author,
        categories,
      }
    );

    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }

    return res.status(200).send(updatedPost);
  } catch (err) {
    return res.status(500).json({ status: err.status, message: err.message });
  }
}
