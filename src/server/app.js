import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to db successfuly");
});

const app = express();
routes(app)

export default app;
