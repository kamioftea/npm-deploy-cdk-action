const core = require('@actions/core');
const {spawnSync } = require('node:child_process');


try {
    const deployAction = core.getInput('cdk-post-command');
    spawnSync('npm', ['run', deployAction], { stdio: 'inherit' });
} catch (error) {
    core.setFailed(error)
}
