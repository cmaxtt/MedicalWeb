const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.')); // Serve static files from root

// Database setup
const db = new sqlite3.Database('./medical.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create appointments table
        db.run(`CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      date TEXT NOT NULL,
      department TEXT NOT NULL,
      doctor TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

        // Create messages table (for contact form)
        db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    }
});

// API Routes

// Make an appointment
app.post('/api/appointments', (req, res) => {
    const { name, email, phone, date, department, doctor, message } = req.body;

    const sql = `INSERT INTO appointments (name, email, phone, date, department, doctor, message) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [name, email, phone, date, department, doctor, message];

    db.run(sql, params, function (err) {
        if (err) {
            console.error(err.message);
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Appointment scheduled successfully',
            data: req.body,
            id: this.lastID
        });
    });
});

// Send a message (Contact form)
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const sql = `INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    const params = [name, email, subject, message];

    db.run(sql, params, function (err) {
        if (err) {
            console.error(err.message);
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Message sent successfully',
            data: req.body,
            id: this.lastID
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
