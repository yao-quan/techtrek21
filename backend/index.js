import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import { User, Project, Category, Expense } from "./models/index.js";

// App Config
const app = express();
const port = process.env.PORT || 8001; // Using 8001 because rarely used

// Middleware
app.use(express.json());
app.use(Cors()); // Enables CORS

// DB Config
const connection_url =
  "mongodb+srv://techtrek21:techtrek21@techtrek-21.hjfbd.mongodb.net/dbs-techtrek-21?retryWrites=true&w=majority";
mongoose.connect(connection_url);

// API Listener
app.listen(port, () => {
  console.log("Listening on localhost:" + port);
});

// API Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Endpoint connected");
});

// const user = `yao_quan`
// const password = `4FXYF!m8AhA`
// const db = `react-test`

// mongoose.connect(`mongodb+srv://${user}:${password}@react-test.cxmrc.mongodb.net/${db}?retryWrites=true&w=majority`)
// const connection = mongoose.connection

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
