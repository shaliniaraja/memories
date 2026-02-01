import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],
  selectedFile: String, //we will convert image to string using base64
  
   likeCount: { type: Number, default: 0 },
  likes: { type: [String], default: [] }, // NEW
  createdAt: {
    type: Date,
    default: new Date(),
  },
 
   
});
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
