const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Array of user objects to act as in-memory "database"
let users = [
    {
        id: "1",
        name: "Sam",
        email: "sam@b.com",
        password: "1234"
    }
];
function validateRegister(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
    }
    next();
}
// Register API
app.post('/register', validateRegister, (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user already exists based on email
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400)
        .json({ message: "User already exists" });
    }

    // Create a new user object and add to users array
    const newUser = {
        id: uuidv4(),
        name,
        email,
        password
    };

    users.push(newUser);
    res.status(201)
    .json({ message: "User registered successfully", user: newUser });
});

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
        return res.status(401)
        .json({ message: "Incorrect password" });
    }
    res.status(200).json({ message: "Login successful", user });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
