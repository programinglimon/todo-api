const express = require("express");
const router = require("./src/route/api");
const app = new express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

// cors
app.use(cors());

// security implementetion
app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// mongodb url

const URI =
  "mongodb+srv://assinment:admin@cluster0.sqqpxdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const OPTION = { user: "assinment", password: "admin", autoIndex: true };

mongoose
  .connect(URI)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// route implement
app.use("/api/v1/", router);

app.use("*", (req, res) => {
  res.status(404).json({ data: "not Found" });
});

module.exports = app;
