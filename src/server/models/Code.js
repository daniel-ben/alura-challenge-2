import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  id: { type: String },
  code: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  language: { type: String, required: true },
  likes: { type: Number },
  comments: [{ body: String, date: Date }],
  author: {
    username: String,
    photourl: String,
  },
});

const codes = mongoose.model('codes', codeSchema);

export default codes;