# Awesome Claude 🎨

CLI tool to install and manage awesome Claude configurations with interactive setup and cross-platform support.

## Description

`awesome-claude` is a powerful CLI tool that simplifies the process of setting up and managing Claude AI configurations. It provides interactive prompts to guide users through selecting installation locations and choosing which configuration files to install.

## ✨ Features

- 🎯 **Interactive Setup**: Guided configuration with user-friendly prompts
- 🌍 **Cross-Platform Support**: Works on macOS, Windows, and Linux
- 📁 **Smart Path Detection**: Automatically suggests optimal installation paths
- 🛠️ **Flexible Configuration**: Choose which files and directories to install
- 📚 **Rich Templates**: Includes pre-built configuration files and examples
- 🎨 **Beautiful UI**: Colorful terminal interface with loading indicators
- ⚡ **Easy Installation**: One-command setup with npm

## 🚀 Quick Start

### Global Installation

```bash
npm install -g awesome-claude
```

### Run the Setup

```bash
awesome-claude
```

### Use with npx (No Installation Required)

```bash
npx awesome-claude
```

Follow the interactive prompts to:

1. Choose your installation location
2. Select configuration files to install
3. Confirm and complete setup

## 📋 Installation Options

The tool supports multiple installation locations based on your operating system:

### macOS

- Current Working Directory (`./.claude`) - Available
- User Home Directory (`~/.claude`) - Currently disabled

### Windows

- Current Working Directory (`./.claude`) - Available
- User Home Directory (`~/.claude`) - Currently disabled

### Linux

- Current Working Directory (`./.claude`) - Available
- User Home Directory (`~/.claude`) - Currently disabled

### Custom Path

You can also specify a custom installation path during the setup process.

## 📁 Configuration Files

The tool installs various configuration files and directories:

### Required Files

- **CLAUDE.md**: Main Claude configuration with AI instructions
- **.claudeignore**: Ignore patterns for Claude operations

### Optional Directories

- **prompts/**: Custom prompt templates
- **templates/**: Project templates
- **examples/**: Example configurations

### Configuration Commands

The tool also includes a comprehensive set of slash commands for various development tasks:

- **AI Enhancement Commands**: `/ai-enhancement:unleash`, `/ai-enhancement:godmode`, etc.
- **Architecture Commands**: `/architecture:architecture`, `/architecture:schema`, etc.
- **Development Commands**: `/development:engineer`, `/development:refactor`, etc.
- **Git Commands**: `/git:commit`, `/git:az-pr`, `/git:branch-diff`, etc.
- **Quality Commands**: `/quality:linting`, `/quality:format`, `/quality:review`, etc.
- **Security Commands**: `/security:security-audit`, `/security:security-review`, etc.
- **Testing Commands**: `/testing:test`
- **Documentation Commands**: `/docs:docs`
- **Deployment Commands**: `/deployment:deploy`
- **Performance Commands**: `/performance:performance`
- **Workflow Commands**: `/workflow:complete-workflow`

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Local Development

```bash
# Clone the repository
git clone https://github.com/AungMyoKyaw/awesome-claude.git
cd awesome-claude

# Install dependencies
npm install

# Run in development mode
npm run dev

# Test the CLI tool
node bin/awesome-claude.js
```

### Available Scripts

- `npm start` - Start the application
- `npm run dev` - Run in development mode with file watching
- `npm test` - Run the test suite
- `npm run lint` - Run ESLint for code quality checks
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run docs` - Generate documentation
- `npm run clean` - Clean build artifacts and dependencies
- `npm run prepare` - Set up git hooks
- `npm run preversion` - Run checks before versioning
- `npm run version` - Format and stage changes for version
- `npm run postversion` - Push changes and tags

### Project Structure

```
awesome-claude/
├── bin/                          # CLI executable
│   └── awesome-claude.js         # Main CLI entry point
├── src/                          # Source code
│   └── cli.js                   # CLI module with interactive setup
├── config/                       # Configuration templates
│   ├── CLAUDE.md                 # Main configuration file
│   ├── commands/                 # Slash command definitions
│   │   ├── ai-enhancement/       # AI enhancement commands
│   │   ├── architecture/         # Architecture commands
│   │   ├── development/          # Development commands
│   │   ├── docs/                 # Documentation commands
│   │   ├── git/                  # Git workflow commands
│   │   ├── performance/          # Performance commands
│   │   ├── quality/              # Code quality commands
│   │   ├── security/             # Security commands
│   │   ├── testing/              # Testing commands
│   │   ├── deployment/           # Deployment commands
│   │   └── workflow/             # Workflow commands
│   ├── prompts/                  # Custom prompt templates
│   ├── templates/                # Project templates
│   └── examples/                 # Example configurations
├── index.js                      # Main entry point
├── package.json                  # Package configuration
└── README.md                     # This file
```

## 🎯 Usage Examples

### Basic Setup

```bash
# Option 1: Install globally
npm install -g awesome-claude
awesome-claude

# Option 2: Use with npx (no installation required)
npx awesome-claude
```

### Custom Installation Path

During setup, you can specify a custom installation path when prompted:

```
? Select installation location:
❯ Current Working Directory: ./.claude (./.claude)
  User Home Directory: ~/.claude (system) - Currently disabled
```

### Selective File Installation

Choose which configuration files to install:

```
? Choose which files to install:
❯ ◉ CLAUDE.md - Main Configuration
  ◯ .claudeignore - Ignore Patterns
  ◉ prompts/ - Custom Prompts Directory
  ◯ templates/ - Template Directory
  ◉ examples/ - Example Configurations
```

### Using Slash Commands

After installation, you can use various slash commands in your Claude environment:

```bash
/ai-enhancement:unleash [request]           # Unleash AI capabilities
/git:commit feat: add new feature           # Smart git commits
/quality:linting javascript --fix           # Code quality checks
/development:refactor optimize-performance  # Code refactoring
/testing:test --coverage                    # Generate tests
```

## 🔧 Advanced Configuration

### Custom CLAUDE.md

The installed `CLAUDE.md` contains comprehensive AI instructions including:

- Work style preferences and communication guidelines
- Transparency and reasoning protocols
- Problem-solving methodologies
- Integration patterns with development workflows

### Integration with Development Workflow

The configuration files integrate seamlessly with:

- Code editors (VS Code, Vim, etc.)
- Git workflows (hooks and automation)
- CI/CD pipelines
- Documentation generators

### Development Dependencies

The project uses modern development tools:

- **@inquirer/prompts**: Interactive command-line prompts
- **chalk**: Terminal string styling
- **ora**: Elegant terminal spinners
- **fs-extra**: Enhanced file system operations
- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting
- **Husky**: Git hooks management

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests if applicable**
5. **Run quality checks**
   ```bash
   npm run lint
   npm run test
   npm run format:check
   ```
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comprehensive tests for new features
- Update documentation as needed
- Ensure cross-platform compatibility
- Use semantic versioning for releases

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/AungMyoKyaw/awesome-claude)
- [Issue Tracker](https://github.com/AungMyoKyaw/awesome-claude/issues)
- [Claude Documentation](https://docs.anthropic.com/claude)

## 🤝 Acknowledgments

- Anthropic for the amazing Claude AI
- The open source community for inspiration and tools

---

Made with ❤️ and powered by Claude AI
