import core from '@actions/core';
import {spawnSync} from 'node:child_process';

try {
    const deployAction = core.getInput('cdk-command');
    spawnSync('npm', ['run', deployAction], { stdio: 'inherit' });
} catch (error) {
    core.setFailed(error)
}
