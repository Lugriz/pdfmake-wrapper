const fs = require('fs');
const originalPackageJson = require('./package.json');
const pdfmakeVersion = originalPackageJson.devDependencies.pdfmake;

// Delete unnecessary properties
delete originalPackageJson.jest;
delete originalPackageJson.scripts;
delete originalPackageJson.devDependencies;

// Add peerDependencies
originalPackageJson.peerDependencies = {
    pdfmake: pdfmakeVersion
};

// Create package in src
fs.writeFileSync(`${__dirname}/src/package.json`, JSON.stringify(originalPackageJson, null, 2));
