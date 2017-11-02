import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

let app = express();
mongoose.connect('mongodb://localhost:27017/blog-db');
app.use(cors());

app.use(bodyParser.json({
  limit: "100kb"
}));

app.use(routes);
app.listen(8080);
console.log('Server is running on port 8080');

export default app;
