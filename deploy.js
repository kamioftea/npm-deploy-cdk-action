import core from '@actions/core';
import {spawnSync} from 'node:child_process';

try {
    const deployAction = core.getInput('cdk-command');
    if(!deployAction) {
        core.setFailed('cdk-command input is required');
        return;
    }
    const command = spawnSync(
        'npm',
        ['run', deployAction],
        {stdio: 'inherit', shell: true}
    );

    if (command.status !== 0) {
        core.setFailed(`Command failed with exit code ${command.status}`);
    }
} catch (error) {
    core.setFailed(error)
}
