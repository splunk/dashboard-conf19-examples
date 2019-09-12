/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs-extra');
const path = require('path');
const appConfig = require('../appConfig');

const buildPath = path.join(__dirname, '..', 'build', appConfig.id);

if (!process.env.SPLUNK_HOME) {
    console.log('Please set SPLUNK_HOME');
    process.exit(1);
}

const appDir = path.join(process.env.SPLUNK_HOME, 'etc', 'apps', appConfig.id);

fs.ensureSymlinkSync(buildPath, appDir);

console.log(`${appConfig.id} is symlinked to ${appDir}`);

const confPath = path.join(process.env.SPLUNK_HOME, 'etc', 'system', 'local', 'web.conf');

const defaultConfFile =
    '[settings]\n' +
    'minify_css = False\n' +
    'minify_js = False\n' +
    'js_logger_mode = None\n' +
    '\n' +
    'cacheEntriesLimit = 0\n' +
    'cacheBytesLimit = 0\n' +
    'enableWebDebug = True\n';

if (!fs.existsSync(confPath)) {
    fs.writeFileSync(confPath, defaultConfFile);
    console.log('Wrote default config to:', confPath);
}
