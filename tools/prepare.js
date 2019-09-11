const fs = require('fs-extra');
const path = require('path');
const appConfig = require('../appConfig');

const buildPath = path.join(__dirname, '..', 'build', appConfig.id);
const resourcePath = path.join(__dirname, '..', 'resources');

if (fs.existsSync(buildPath)) {
    fs.removeSync(buildPath);
}

fs.mkdirpSync(buildPath, { recursive: true });
fs.copySync(resourcePath, buildPath);

console.log(`${appConfig.id} is prepared`);
