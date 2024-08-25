const simpleGit = require("simple-git");
const git = simpleGit();

async function rewriteCommits() {
  try {
    // List all commits
    const log = await git.log();
    const commits = log.all;

    // Iterate through commits and rewrite email addresses
    for (const commit of commits) {
      if (commit.author_email.includes("[")) {
        // Amend commit with corrected email
        await git.raw([
          "commit",
          "--amend",
          '--author="Your Name <bustillomarkian23@gmail.com>"',
          "--no-edit",
          "--allow-empty",
        ]);
      }
    }

    // Force push changes
    await git.push("origin", "master", { "--force": null });

    console.log("Commits rewritten successfully");
  } catch (error) {
    console.error("Error rewriting commits:", error);
  }
}

rewriteCommits();
