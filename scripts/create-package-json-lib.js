const fs = require('fs');
const originalPackageJson = require('../package.json');

// Delete unnecessary properties
delete originalPackageJson.jest;
delete originalPackageJson.scripts;
delete originalPackageJson.devDependencies;

// Create package in src
fs.writeFileSync(`${__dirname}/../dist/package.json`, JSON.stringify(originalPackageJson, null, 2));
