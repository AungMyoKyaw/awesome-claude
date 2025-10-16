#!/usr/bin/env node

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Get the package.json version
const packageJson = require('../package.json');

// Import the CLI module
import { setupClaudeConfig } from '../src/cli.js';

async function main() {
  try {
    console.log(`🎨 Awesome Claude Config v${packageJson.version}`);
    console.log('CLI tool to install and manage awesome Claude configurations\n');

    await setupClaudeConfig();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n👋 Setup cancelled by user');
  process.exit(0);
});

main();
