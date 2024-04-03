const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./Models/Employee");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");

app.use(cors());
// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/EmployeeManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Generate salt and hash the password
    const saltRounds = 10; // Adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new employee with hashed password
    const employee = new Employee({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save the employee to the database
    await employee.save();

    console.log("Employee saved successfully:", employee);
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, employee.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.json({ success: true, redirect: "/", name: employee.name });
  } catch (err) {
    console.error("Error signing in:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
