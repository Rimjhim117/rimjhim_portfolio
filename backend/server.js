import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// File paths for storing data
const __dirname = path.resolve();
const messagesFile = path.join(__dirname, "messages.json");
const projectsFile = path.join(__dirname, "projects.json");

// Load projects (static for now)
app.get("/api/projects", (req, res) => {
  const data = fs.readFileSync(projectsFile, "utf-8");
  res.json(JSON.parse(data));
});

// Save contact form messages
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let messages = [];
  if (fs.existsSync(messagesFile)) {
    messages = JSON.parse(fs.readFileSync(messagesFile, "utf-8"));
  }

  const newMessage = { id: Date.now(), name, email, message };
  messages.push(newMessage);

  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  res.json({ success: true, message: "Message saved!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
