import mongoose from "mongoose";
import PostMessage from '../models/postMessage.js';


export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;

    const newPost = new PostMessage({
      ...post,
      creator: req.userId,   // ✅ FIXED
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    const post = await PostMessage.findById(_id);

    if (post.creator.toString() !== req.userId) {
      return res.status(401).json({ message: "Not allowed" });
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with that id");

    const post = await PostMessage.findById(id);

    if (post.creator.toString() !== req.userId) {
      return res.status(401).json({ message: "Not allowed" });
    }

    await PostMessage.findByIdAndDelete(id);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  // check if user is logged in
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  const post = await PostMessage.findById(id);

  // check if user has already liked
  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // not liked yet → add user
    post.likes.push(req.userId);
  } else {
    // already liked → remove user (unlike)
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  post.likeCount = post.likes.length; // update count

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
