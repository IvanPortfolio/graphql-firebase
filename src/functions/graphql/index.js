const express = require("express");
const { pullRequestsControllers } = require("./controllers");
const { processRequest } = require("./handlers");
const app = express();

app.enable("trust proxy");
app.use(express.json());

app.get("/", processRequest(pullRequestsControllers.listPullRequests));

module.exports = app;
