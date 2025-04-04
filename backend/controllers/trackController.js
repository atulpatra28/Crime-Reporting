const db = require('../db');

exports.getCaseStatus = (req, res) => {
    const caseId = req.params.id;
    db.query('SELECT * FROM reports WHERE id = ?', [caseId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0]);
    });
};

exports.updateCaseStatus = (req, res) => {
    const caseId = req.params.id;
    const { status } = req.body;

    db.query('UPDATE reports SET status = ? WHERE id = ?', [status, caseId], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Case status updated successfully' });
    });
};
