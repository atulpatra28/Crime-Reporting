const db = require('../db');

exports.createReport = (req, res) => {
    const { title, description, location, evidence_url } = req.body;

    const query = 'INSERT INTO reports (title, description, location, evidence_url) VALUES (?, ?, ?, ?)';
    db.query(query, [title, description, location, evidence_url], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Report submitted successfully', reportId: result.insertId });
    });
};

exports.getAllReports = (req, res) => {
    db.query('SELECT * FROM reports', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};
