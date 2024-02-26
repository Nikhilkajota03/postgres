const express = require("express");
const app = express();
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");

console.log(pool);

const PORT = process.env.PORT || 4000;

// Parses details from a form
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/users/register", (req, res) => {
  res.render("register");
});

app.get("/users/login", (req, res) => {
  res.render("login");
});

app.get("/users/dashboard", (req, res) => {
  res.render("dashboard", { user: "cornor" });
});

app.post("/users/register", async (req, res) => {
  let { name, email, password, password2 } = req.body;

  console.log(email)

  // if (!name || !email || !password || !password2) {
  //   errors.push({ message: "Please enter all fields" });
  // }

  // if (password.length < 6) {
  //   errors.push({ message: "Password must be a least 6 characters long" });
  // }

  // if (password !== password2) {
  //   errors.push({ message: "Passwords do not match" });
  // }

  // if (errors.length > 0) {
  //   res.render("register", { errors });
  // } else {

    console.log("reach before query")

  const existingUser = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  console.log(existingUser)

  console.log("exit query")


  if (existingUser.rows.length > 0) {
    return res.status(400).send('User already exists');
  }else{
    return res.status(200).json("user not exist")
  }

    
  // }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
