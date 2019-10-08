/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs-extra');
const template = require('lodash.template');
const path = require('path');
const appConfig = require('../appConfig');

const buildPath = path.join(__dirname, '..', 'build', appConfig.id);
const resourcePath = path.join(__dirname, '..', 'resources');

const resourceMeta = {
    applicationId: appConfig.id,
};

/**
 * walk a dir and return all files
 * @param {*} dir
 */
const walkDir = dir => {
    let files = [];
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            files = files.concat(walkDir(dirPath));
        } else {
            files.push(path.join(dir, f));
        }
    });
    return files;
};

/**
 * copy file from resources and replace variables
 * @param {*} source
 * @param {*} dist
 */
const copyAndReplace = (source, dist) => {
    const files = walkDir(source);
    files.forEach(f => {
        let content = fs.readFileSync(f);
        if (path.extname(f) === '.xml') {
            const compiled = template(content);
            content = compiled(resourceMeta);
        }
        const filePath = path.join(dist, f.replace(source, ''));
        fs.outputFileSync(filePath, content);
    });
};

if (fs.existsSync(buildPath)) {
    fs.removeSync(buildPath);
}

fs.mkdirpSync(buildPath, { recursive: true });

copyAndReplace(resourcePath, buildPath);

console.log(`${appConfig.id} is prepared`);
