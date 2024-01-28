import core from '@actions/core';
import {spawnSync} from 'node:child_process';

try {
    const destroyAction = core.getInput('cdk-post-command');
    if(!destroyAction) {
        core.setFailed('cdk-post-command input is required');
        process.exit(1);
    }
    const command = spawnSync(
        'npm',
        ['run', destroyAction],
        {stdio: 'inherit', shell: true}
    );

    if (command.status !== 0) {
        core.setFailed(`Command failed with exit code ${command.status}`);
    }
} catch (error) {
    core.setFailed(error)
}
