// Install the parser first
// npm install snyk-nodejs-lockfile-parser

const fs = require('fs');
const path = require('path');
const lockfileParser = require('snyk-nodejs-lockfile-parser');

// You may need this enum for lockfile types
const { LockfileType } = lockfileParser;

// Example: load package.json (manifest) and package-lock.json
const manifestPath = path.resolve(__dirname, 'package.json');
const lockfilePath = path.resolve(__dirname, 'package-lock.json');

const manifest = fs.readFileSync(manifestPath, 'utf-8');
const lockfile = fs.readFileSync(lockfilePath, 'utf-8');

async function showDepTree() {
  try {
    // buildDepTree returns a dependency tree (legacy) structure
    const depTree = await lockfileParser.buildDepTree(
      manifest,
      lockfile,
      /* includeDev = */ false,
      /* lockfileType = */ LockfileType.npm,
      /* strictOutOfSync = */ true
    );
    console.log(JSON.stringify(depTree, null, 2));
  } catch (err) {
    console.error('Error building dep tree:', err);
  }
}

showDepTree();
