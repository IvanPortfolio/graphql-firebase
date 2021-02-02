const axios = require("axios");

class Client {
  constructor(url, token) {
    this.httpClient = axios.create({
      baseURL: url,
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  query(query, variables = {}) {
    return this.httpClient
      .post(
        "/graphql",
        JSON.stringify({
          query,
          variables,
        })
      )
      .then((result) => result.data.data);
  }
}

module.exports = new Client(
  process.env.GITHUB_GRAPHQL_API,
  process.env.GITHUB_GRAPHQL_TOKEN
);
