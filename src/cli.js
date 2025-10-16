import { select, confirm, checkbox } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common configuration paths
const CONFIG_PATHS = {
  macos: [
    {
      name: 'User Home Directory: ~/.claude (system)',
      path: path.join(homedir(), '.claude'),
      disabled: true,
    },
    { name: 'Current Working Directory: ./claude', path: path.join(process.cwd(), 'claude') },
  ],
  windows: [
    {
      name: 'User Home Directory: ~/.claude (system)',
      path: path.join(homedir(), '.claude'),
      disabled: true,
    },
    { name: 'Current Working Directory: ./claude', path: path.join(process.cwd(), 'claude') },
  ],
  linux: [
    {
      name: 'User Home Directory: ~/.claude (system)',
      path: path.join(homedir(), '.claude'),
      disabled: true,
    },
    { name: 'Current Working Directory: ./claude', path: path.join(process.cwd(), 'claude') },
  ],
};

// Configuration files to install
const CONFIG_FILES = [
  { name: 'CLAUDE.md - Main Configuration', file: 'CLAUDE.md', required: true },
  {
    name: '.claudeignore - Ignore Patterns',
    file: '.claudeignore',
    required: false,
  },
  {
    name: 'prompts/ - Custom Prompts Directory',
    file: 'prompts',
    required: false,
    isDirectory: true,
  },
  {
    name: 'templates/ - Template Directory',
    file: 'templates',
    required: false,
    isDirectory: true,
  },
  {
    name: 'examples/ - Example Configurations',
    file: 'examples',
    required: false,
    isDirectory: true,
  },
];

export async function setupClaudeConfig() {
  console.log(chalk.blue.bold('🚀 Welcome to Awesome Claude Configuration Setup!\n'));

  try {
    // Step 1: Select installation location
    const platform = getPlatform();
    console.log(chalk.yellow(`📍 Detected platform: ${platform}`));

    console.log(chalk.gray('\n📋 Installation Options:'));
    console.log(chalk.gray('  • User Home Directory (system) - Currently disabled'));
    console.log(chalk.green('  • Current Working Directory: ./claude - Available\n'));

    const installPath = await selectInstallationPath(platform);

    const targetPath = installPath;

    // Step 2: Select configuration files
    console.log(chalk.yellow('\n📋 Select configuration files to install:'));
    const selectedFiles = await checkbox({
      message: 'Choose which files to install:',
      choices: CONFIG_FILES.map(file => ({
        name: file.name,
        value: file,
        checked: file.required,
      })),
    });

    // Step 3: Confirmation
    console.log(chalk.yellow('\n📋 Installation Summary:'));
    console.log(chalk.white(`Target Path: ${targetPath}`));
    console.log(chalk.white('Files to install:'));
    selectedFiles.forEach(file => {
      console.log(chalk.white(`  ✓ ${file.name}`));
    });

    const confirmed = await confirm({
      message: 'Proceed with installation?',
      default: true,
    });

    if (!confirmed) {
      console.log(chalk.red('❌ Installation cancelled by user'));
      return;
    }

    // Step 4: Installation
    await installConfiguration(targetPath, selectedFiles);

    console.log(chalk.green.bold('\n✅ Installation completed successfully!'));
    console.log(chalk.blue('Your Awesome Claude configuration is now ready to use.'));
  } catch (error) {
    if (error.name === 'ExitPromptError') {
      console.log(chalk.yellow('\n👋 Setup cancelled by user'));
      return;
    }
    throw error;
  }
}

function getPlatform() {
  const platform = process.platform;
  switch (platform) {
    case 'darwin':
      return 'macOS';
    case 'win32':
      return 'Windows';
    case 'linux':
      return 'Linux';
    default:
      return 'Unknown';
  }
}

async function selectInstallationPath(platform) {
  const paths = CONFIG_PATHS[platform.toLowerCase()] || CONFIG_PATHS.linux;

  // Filter out disabled options
  const availablePaths = paths.filter(pathOption => !pathOption.disabled);

  const choice = await select({
    message: 'Select installation location:',
    choices: availablePaths.map(pathOption => ({
      name: `${pathOption.name} (${pathOption.path})`,
      value: pathOption.path,
    })),
  });

  return choice;
}

async function installConfiguration(targetPath, files) {
  const spinner = ora('Installing configuration...').start();

  try {
    // Ensure target directory exists
    await fs.ensureDir(targetPath);

    for (const file of files) {
      spinner.text = `Installing ${file.name}...`;

      const sourcePath = path.join(__dirname, '..', 'config', file.file);

      if (file.isDirectory) {
        // Copy directory
        if (await fs.pathExists(sourcePath)) {
          await fs.copy(sourcePath, path.join(targetPath, file.file));
        } else {
          // Create empty directory if source doesn't exist
          await fs.ensureDir(path.join(targetPath, file.file));
        }
      } else {
        // Copy file
        if (await fs.pathExists(sourcePath)) {
          await fs.copy(sourcePath, path.join(targetPath, file.file));
        } else {
          // Create default file if source doesn't exist
          await createDefaultFile(path.join(targetPath, file.file), file.file);
        }
      }
    }

    spinner.succeed('Configuration installed successfully');
  } catch (error) {
    spinner.fail('Installation failed');
    throw error;
  }
}

async function createDefaultFile(filePath, fileName) {
  const defaultContent = getDefaultFileContent(fileName);
  await fs.writeFile(filePath, defaultContent, 'utf8');
}

function getDefaultFileContent(fileName) {
  switch (fileName) {
    case 'CLAUDE.md':
      return `# Claude Configuration

This is your awesome Claude configuration file.

## Instructions

Add your custom instructions and prompts here.

## Examples

- Custom response formats
- Specific knowledge domains
- Coding preferences
- Workflow automation

---

Generated by Awesome Claude Config Tool
`;

    case '.claudeignore':
      return `# Claude Ignore File

# Files and directories to ignore during Claude operations

node_modules/
dist/
build/
*.log
.DS_Store
.env
.env.local

# Add your own ignore patterns below
`;

    default:
      return `# Default configuration file

This file was generated by the Awesome Claude Config tool.
Configure it according to your needs.
`;
  }
}
