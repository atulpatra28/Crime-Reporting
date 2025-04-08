const express = require("express");
const app = express();
const reportRoute = require("./routes/reportRoute");
app.use(express.json());
app.use("/api", reportRoute);
