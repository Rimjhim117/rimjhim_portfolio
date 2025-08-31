import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// File paths
const __dirname = path.resolve();
const messagesFile = path.join(__dirname, "messages.json");
const projectsFile = path.join(__dirname, "projects.json");

// Utility functions
const readJSON = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const writeJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ===== Routes ===== //

// Get all projects
app.get("/api/projects", (req, res) => {
  try {
    const projects = readJSON(projectsFile);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to load projects" });
  }
});

// Add contact message
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const messages = readJSON(messagesFile);
  const newMessage = { id: Date.now(), name, email, message, createdAt: new Date() };
  messages.push(newMessage);
  writeJSON(messagesFile, messages);

  res.json({ success: true, message: "Message saved!" });
});

// Get all messages (optional dashboard)
app.get("/api/messages", (req, res) => {
  try {
    const messages = readJSON(messagesFile);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to load messages" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
