import core from '@actions/core';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';

try {
    if(core.getInput('destroy') === 'false') {
        console.log("Action has been configured not to destroy the staging stack, skipping...")
        return
    }

    const destroyAction = core.getInput('cdk-post-command');
    const cwd = resolve(core.getInput('working-directory'));

    const command = spawnSync(
        'npm',
        ['run', destroyAction],
        {stdio: 'inherit', shell: true, cwd}
    );

    if (command.status !== 0) {
        core.setFailed(`Command failed with exit code ${command.status}`);
    }
} catch (error) {
    core.setFailed(error)
}
