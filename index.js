const { Octokit } = require("@octokit/rest");

// Get Input Parameters
const repoOwner = process.env.REPO_OWNER
const repoName = process.env.REPO_NAME
const token = process.env.REPO_TOKEN

const octokit = new Octokit({
    auth: token
  });

async function listIssues() {
    
    const issues = await octokit.rest.issues.listForRepo({
        owner: repoOwner,
        repo: repoName
    });
    // Iterate over the issues and print each one
    for (const issue of issues.data) {
        // Print the issue number and the issue's title
        console.log(issue.number, ": ", issue.title);
    }
}

listIssues();