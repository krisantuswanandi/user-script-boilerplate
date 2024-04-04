const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const tag = core.getInput("tag", { required: true });
    const version = tag.replace("refs/tags/", "");

    const token = core.getInput("token", { required: true });
    const octokit = github.getOctokit(token);

    await octokit.rest.repos.createRelease({
      owner: "krisantuswanandi",
      repo: "user-script-boilerplate",
      tag_name: version,
      name: version,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
