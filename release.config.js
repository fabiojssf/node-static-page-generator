module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/fabiojssf/node-static-page-generator",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}