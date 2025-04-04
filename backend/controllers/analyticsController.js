const db = require('../db');

exports.getCrimeSummary = (req, res) => {
    const query = `
    SELECT 
      COUNT(*) AS total_reports,
      SUM(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END) AS resolved_cases,
      SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END) AS pending_cases
    FROM reports
  `;

    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0]);
    });
};
