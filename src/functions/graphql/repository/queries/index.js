exports.LIST_PULL_REQUESTS = `query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
        pullRequests(first: 10) {
            nodes {
                author {
                    avatarUrl
                    login
                }
                files(first: 10) {
                    nodes {
                        additions
                        deletions
                        path
                    }
                }
            }
        }
    }
}`;
