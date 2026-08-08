const express = require("express");

const app = express();
const PORT = 5000;

// Root route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Test API route
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from backend",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});