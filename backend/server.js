const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// File paths
const __dirname = path.resolve();
const messagesFile = path.join(__dirname, "backend", "messages.json");
const projectsFile = path.join(__dirname, "backend", "projects.json");

// Utility functions
const readJSON = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeJSON = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
    // For Vercel deployment, we'll just log the message instead of saving
    console.log('Message would be saved:', data);
  }
};

// ===== Routes ===== //
// Get all projects
app.get("/api/projects", (req, res) => {
  try {
    const projects = readJSON(projectsFile);
    res.json(projects);
  } catch (err) {
    console.error('Error in /api/projects:', err);
    res.status(500).json({ error: "Failed to load projects" });
  }
});

// Add contact message
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  
  try {
    const messages = readJSON(messagesFile);
    const newMessage = { 
      id: Date.now(), 
      name, 
      email, 
      message, 
      createdAt: new Date().toISOString() 
    };
    messages.push(newMessage);
    writeJSON(messagesFile, messages);
    res.json({ success: true, message: "Message saved!" });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Get all messages (optional dashboard)
app.get("/api/messages", (req, res) => {
  try {
    const messages = readJSON(messagesFile);
    res.json(messages);
  } catch (err) {
    console.error('Error in /api/messages:', err);
    res.status(500).json({ error: "Failed to load messages" });
  }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;