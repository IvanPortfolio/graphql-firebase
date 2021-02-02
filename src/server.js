const app = require("./functions/graphql");

app.listen(process.env.PORT, () => {
  console.log("server started");
});
