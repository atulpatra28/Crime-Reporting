const db = require('../db');

exports.getRecentAlerts = (req, res) => {
    db.query('SELECT * FROM reports WHERE status = "Active" ORDER BY created_at DESC LIMIT 5', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};
