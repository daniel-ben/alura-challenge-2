import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:teste@codes.s7sj4.mongodb.net/code-highlighter")

let db = mongoose.connection;

export default db;