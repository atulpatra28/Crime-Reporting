const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

router.post("/report", (req, res) => {
    const { type, location, description, reporter } = req.body;

    const process = spawn("java", [
        "-cp",
        "./java-services/CrimeService",
        "Main",
        type,
        location,
        description,
        reporter,
    ]);

    let output = "";
    process.stdout.on("data", (data) => {
        output += data.toString();
    });

    process.on("close", () => {
        res.json({ message: output.trim() });
    });
});

module.exports = router;
