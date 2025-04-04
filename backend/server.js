const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const reportRoutes = require('./routes/reports');
const trackRoutes = require('./routes/track');
const alertRoutes = require('./routes/alerts');
const analyticsRoutes = require('./routes/analytics');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reports', reportRoutes);
app.use('/api/track', trackRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
