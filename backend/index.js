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

// POST User Login (Username, Password)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  let userInfo;

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        const error = new Error("This username is not registered.");
        console.log("Wrong username");

        return res
          .status(401)
          .json("Invalid username and password combination.");
      }

      userInfo = user;
      console.log("Username exists, proceeding...");
      return password === user.password;
    })
    .then((isEqual) => {
      if (userInfo) {
        if (!isEqual) {
          const error = new Error("Wrong password!");
          console.log("Wrong password");
          return res.status(401).json({ verified: false, user_id: null });
        } else {
          console.log("Successful login");
          return res
            .status(200)
            .json({ verified: true, user_id: userInfo.id.toString() });
        }
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});
