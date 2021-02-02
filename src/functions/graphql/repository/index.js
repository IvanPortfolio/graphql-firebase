const client = require("./client");
const { LIST_PULL_REQUESTS } = require("./queries");

exports.listPullRequests = ({ name, owner }) =>
  client.query(LIST_PULL_REQUESTS, { name, owner });
