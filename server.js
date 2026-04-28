const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static frontend
app.use(express.static(path.join(__dirname, "public")));

// Health check (CI/CD)
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "amjid-devops-portfolio" });
});

// Version endpoint (DevOps flex 💪)
app.get("/version", (req, res) => {
  res.json({ version: "1.0.0", deployedAt: new Date() });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});