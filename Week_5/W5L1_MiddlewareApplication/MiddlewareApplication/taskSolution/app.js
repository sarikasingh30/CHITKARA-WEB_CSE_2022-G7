const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();
const PORT = 8080;
// Built - In Middleware
app.use(express.json());

// Register Middleware
function validateUser(req, res, next) {
  let { name, email, password } = req.body;
  if ((req.path=="/register"&& !name )|| !email || !password) {
    return res.send("Required All Fields");
  }
  next();
}

function getUsers() {
  try {
    let data = fs.readFileSync(path.join(__dirname, "db.json"));
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
function saveUsers(data) {
  try {
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

app.post("/register", validateUser, (req, res) => {
  let { name, email, password } = req.body;
  users = getUsers();
  let userExists = users.some((el) => el.email == email);
  if (userExists) {
    return res.send("Email Already Exists");
  }
  let newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  users.push(newUser);
  console.log(users);
  saveUsers(users);
  res.status(200).send("Register Successfully");
});

app.post("/login", validateUser, (req, res) => {
  let { email, password } = req.body;
  let users = getUsers();
  let user = users.find((el) => el.email == email && el.password == password);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).send("Login Successful");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});
