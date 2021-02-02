exports.processRequest = (controller) => (req, res, next) =>
  Promise.resolve()
    .then(() => controller(req, res))
    .then((result) =>
      res.status(200).json(
        JSON.stringify({
          data: result,
        })
      )
    )
    .catch(next);
