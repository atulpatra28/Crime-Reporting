const { exec } = require('child_process');

exports.loginUser = (req, res) => {
    exec('java -cp java-services/UserService Main', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Java service failed');
        }
        res.send(`Java UserManager Output: ${stdout}`);
    });
};
