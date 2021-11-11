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

// GET All Projects
app.get("/projects", (req, res) => {
  Project.find({}, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    } else {
      if (data.length > 0) {
        return res.status(200).json({ projects: data });
      } else {
        return res.status(200).send("No Projects");
      }
    }
  });
});

// POST Update Expense-budget
app.post("/update-expense-budget", (req, res) => {
  const { id, amount } = req.body;

  // Check if expense is registered in DB
  Expense.findOne({ id })
    .then((expense) => {
      if (!expense) {
        const err = new Error("Expense could not be found.");
        return res.status(404).json("Expense could not be found.");
      }

      console.log("Expense found, proceeding...");
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });

  Expense.updateOne(
    { id: id },
    {
      $set: {
        amount: amount,
      },
    }
  )
    .then(() => {
      return res.status(200).jsonp("Successfully updated expense budget");
    })
    .catch((err) => {
      return res.status(500).json(err.messsage);
    });
});
