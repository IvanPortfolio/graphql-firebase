const repository = require("../repository");

exports.listPullRequests = (name, owner) => {
  return repository.listPullRequests({ name, owner });
};
