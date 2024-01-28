const core = require('@actions/core');
const {spawnSync } = require('node:child_process');


try {
    const deployAction = core.getInput('cdk-command');
    spawnSync('npm', ['run', deployAction], { stdio: 'inherit' });
} catch (error) {
    core.setFailed(error)
}
