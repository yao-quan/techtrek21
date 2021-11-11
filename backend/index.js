import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import { User, Project, Category, Expense } from "./models/index.js";
import products from "../../DBS-Hackathon-Prep/ecommerse/backend/model/products.js";

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

// GET All Expenses
app.get("/expenses", (req, res) => {
  const dbExpense = req.body;

  Expense.find({ dbExpense })
    .then((expense) => {
      if (!expense) {
        const err = new Error("No expenses in DB");
        console.log("no expenses in DB");

        return res.status(401).json(err.message);
      }
      console.log("has expenses in DB");
      return res.status(200).json({ expenses: expense });
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});

// GET Expenses By Project
app.get("/expenses-project", (req, res) => {
  const dbExpense = req.body;

  Expense.find({ project_id: dbExpense.project_id })
    .then((expense) => {
      if (!expense) {
        const err = new Error("No expenses in DB");
        console.log("no expenses in DB");

        return res.status(401).json(err.message);
      }
      return res.status(200).json({ expenses: expense });
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});

// POST Update Expense
app.post("/update-expense", (req, res) => {
  const dbExpense = req.body;
  let expenseExist;
  console.log(req.body);

  // Check if expense is registered in DB
  Expense.findOne({ id: dbExpense.id })
    .then((expense) => {
      if (!expense) {
        const err = new Error("Expense could not be found.");
        console.log("Expense that you are trying to update cannot be found");
        return res.status(404).json({ updated: false });
      }

      expenseExist = true;
      console.log("Expense found, proceeding...");
    })
    .then(() => {
      if (expenseExist) {
        Expense.updateOne(
          { id: dbExpense.id },
          {
            $set: {
              project_id: dbExpense.project_id,
              category_id: dbExpense.category_id,
              name: dbExpense.name,
              description: dbExpense.description,
              amount: dbExpense.amount,
              created_by: dbExpense.created_by,
              updated_by: dbExpense.updated_by,
            },
          }
        )
          .then(() => {
            console.log("Expense updated");
            return res.status(200).json({ updated: true });
          })
          .catch((err) => {
            return res.status(500).json({ updated: false });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});

// POST Add Expense to Expense Table
app.post("/add-expense", (req, res) => {
  console.log(req.body);
  const expenseInfo = req.body;
  let expenseExist;

  Expense.findOne({ id: expenseInfo.id })
    .then((expense) => {
      if (expense) {
        const err = new Error(
          "This expense ID already exists, please use another one."
        );
        expenseExist = true;
        return res.status(400).json({ added: false });
      }
      expenseExist = false;
      console.log("Expense does not exist, proceeding...");
    })
    .then(() => {
      console.log(expenseExist);
      if (!expenseExist) {
        Expense.create(expenseInfo, (err, data) => {
          if (err) {
            console.log("failed to added");
            return res.status(500).json({ added: false });
          } else {
            console.log("expense added");
            return res.status(200).json({ added: true });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});

// POST Remove Expense
app.delete("/remove-expense", (req, res) => {
  console.log(req.body);
  const expenseInfo = req.body;

  Expense.findOneAndRemove({ id: expenseInfo.id })
    .then((expense) => {
      if (!expense) {
        const err = new Error(
          "The expense that you are trying to remove does not exist"
        );
        console.log("Expense does not exist");
        return res.status(404).json({ removed: false });
      } else {
        console.log("Expense deleted");
        return res.status(200).json({ removed: true });
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});

// // GET Expenses by Category (Filter)
app.get("/category", (req, res) => {
  var dbCat = req.body;
  let categoryExist;

  Category.findOne({ id: dbCat.category_id })
    .then((category) => {
      if (!category) {
        const err = new Error("This category ID does not exist");
        console.log("Category ID does not exist");
        return res.status(401).json(err.message);
      }

      categoryExist = true;
      console.log("Category ID exist, proceeding...");
    })
    .then(() => {
      if (categoryExist) {
        Expense.find({ category_id: dbCat.category_id }).then((expense) => {
          if (!expense) {
            const err = new Error("No expenses with this category ID");
            console.log("No expense with this Category ID");
            return res.status(401).json({ expenses: null });
          }
          console.log("Found expense with this category");
          return res.status(201).json({ expenses: expense });
        });
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
});
