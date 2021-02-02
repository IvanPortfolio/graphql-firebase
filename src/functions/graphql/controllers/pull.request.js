const services = require("../services");

exports.listPullRequests = ({ query: { name, owner } }) =>
  services.pullRequests.listPullRequests(name, owner);
