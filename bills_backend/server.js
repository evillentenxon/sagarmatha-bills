// index.js or server.js
// require('dotenv').config();
const express = require('express');
const app = express();
// const userRoutes = require('./routes/userRoutes');
// const dbConnection = require('./config/dbconfig');
// const cors = require('cors');
// const cookieParser = require("cookie-parser");
// const socketConfig = require('./config/socketConfig');
// const http = require('http');
// const server = http.createServer(app); // ✅ Create HTTP server
const path= require('path');

const PORT = 8000;

// Database connection
// dbConnection();

// app.use(cookieParser());

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

// app.use('/users', userRoutes);

// ✅ Setup socket.io
// socketConfig(server);

// ✅ Start the HTTP server (not app.listen)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
