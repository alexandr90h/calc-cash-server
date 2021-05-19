const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const calcRouter = require("./routers/api/calc");
const setingRouter = require("./routers/api/seting");
const debtsRouter = require("./routers/api/debts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/", calcRouter);
app.use("/seting", setingRouter);
app.use("/debts", debtsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
