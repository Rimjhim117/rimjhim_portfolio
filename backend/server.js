const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// File paths for Vercel environment
const getFilePath = (filename) => {
  // Try different possible locations
  const locations = [
    path.join(process.cwd(), "backend", filename),
    path.join(process.cwd(), filename),
    path.join(__dirname, filename),
    path.join(__dirname, "..", filename)
  ];
  
  for (const location of locations) {
    if (fs.existsSync(location)) {
      return location;
    }
  }
  
  return locations[0]; // fallback to first option
};

// Utility functions
const readJSON = (filename) => {
  try {
    const filePath = getFilePath(filename);
    console.log(`Trying to read from: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return [];
    }
    
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
};

const writeJSON = (filename, data) => {
  try {
    const filePath = getFilePath(filename);
    console.log(`Trying to write to: ${filePath}`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    console.log('Data that would be saved:', data);
    return false;
  }
};

// ===== Routes ===== //

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Backend is running!",
    timestamp: new Date().toISOString()
  });
});

// Get all projects
app.get("/api/projects", (req, res) => {
  try {
    console.log("GET /api/projects called");
    const projects = readJSON("projects.json");
    console.log(`Loaded ${projects.length} projects`);
    
    // If no projects found, return sample data
    if (projects.length === 0) {
      const sampleProjects = [
        {
          id: 1,
          title: "Sample Project 1",
          description: "This is a sample project description",
          technologies: ["React", "Node.js", "MongoDB"],
          github: "https://github.com/yourusername/project1",
          demo: "https://project1-demo.com",
          image: "/api/placeholder/400/300"
        },
        {
          id: 2,
          title: "Sample Project 2", 
          description: "Another sample project description",
          technologies: ["Vue.js", "Express", "PostgreSQL"],
          github: "https://github.com/yourusername/project2",
          demo: "https://project2-demo.com",
          image: "/api/placeholder/400/300"
        }
      ];
      return res.json(sampleProjects);
    }
    
    res.json(projects);
  } catch (err) {
    console.error('Error in /api/projects:', err);
    res.status(500).json({ error: "Failed to load projects" });
  }
});

// Add contact message
app.post("/api/contact", (req, res) => {
  try {
    console.log("POST /api/contact called");
    console.log("Request body:", req.body);
    
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const messages = readJSON("messages.json");
    const newMessage = { 
      id: Date.now(), 
      name: name.trim(), 
      email: email.trim(), 
      message: message.trim(), 
      createdAt: new Date().toISOString() 
    };
    
    messages.push(newMessage);
    const success = writeJSON("messages.json", messages);
    
    if (success) {
      console.log("Message saved successfully");
      res.json({ success: true, message: "Message saved successfully!" });
    } else {
      console.log("Message received but not saved (serverless limitation)");
      res.json({ 
        success: true, 
        message: "Message received! (Note: In serverless environment, messages are logged but not permanently stored)" 
      });
    }
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ error: "Failed to process message" });
  }
});

// Get all messages (optional dashboard)
app.get("/api/messages", (req, res) => {
  try {
    console.log("GET /api/messages called");
    const messages = readJSON("messages.json");
    res.json(messages);
  } catch (err) {
    console.error('Error in /api/messages:', err);
    res.status(500).json({ error: "Failed to load messages" });
  }
});

// Handle all other API routes
app.all("/api/*", (req, res) => {
  console.log(`Unhandled API route: ${req.method} ${req.path}`);
  res.status(404).json({ error: `Route ${req.path} not found` });
});

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;