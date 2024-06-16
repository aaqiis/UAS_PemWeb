const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'javawebmedia_webci4'
});

const app = express();

// Middleware
app.use(cors()); // Add CORS middleware here
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Import routes
//const beritaRoutes = require('./routes/berita');
//app.use('/berita', beritaRoutes);

// Middleware to handle favicon requests
app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // No content response for favicon.ico
});

// Middleware to handle root endpoint
app.get('/', (req, res) => {
  const sql = 'SELECT judul_berita, jenis_berita, ringkasan, keywords, gambar FROM berita';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
