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

Follow the interactive prompts to:

1. Choose your installation location
2. Select configuration files to install
3. Confirm and complete setup

## 📋 Installation Options

The tool supports multiple installation locations based on your operating system:

### macOS

- User Home Directory (`~/.claude`)
- Application Support (`~/Library/Application Support/Claude`)
- Custom path

### Windows

- User Home Directory (`~/.claude`)
- AppData Local (`~/AppData/Local/Claude`)
- AppData Roaming (`~/AppData/Roaming/Claude`)
- Custom path

### Linux

- User Home Directory (`~/.claude`)
- Config Directory (`~/.config/claude`)
- Local Share (`~/.local/share/claude`)
- Custom path

## 📁 Configuration Files

The tool installs various configuration files and directories:

### Required Files

- **CLAUDE.md**: Main Claude configuration with transcendent AI instructions
- **.claudeignore**: Ignore patterns for Claude operations

### Optional Directories

- **prompts/**: Custom prompt templates (includes code review prompt)
- **templates/**: Project templates (includes README template)
- **examples/**: Example configurations and code snippets

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
- `npm run clean` - Clean build artifacts and dependencies

### Project Structure

```
awesome-claude/
├── bin/                    # CLI executable
│   └── awesome-claude.js   # Main CLI entry point
├── src/                    # Source code
│   └── cli.js             # CLI module with interactive setup
├── config/                # Configuration templates
│   ├── CLAUDE.md          # Main configuration file
│   ├── .claudeignore      # Ignore patterns
│   ├── prompts/           # Custom prompts
│   ├── templates/         # Project templates
│   └── examples/          # Example configurations
├── index.js               # Legacy entry point
├── package.json           # Package configuration
└── README.md              # This file
```

## 🎯 Usage Examples

### Basic Setup

```bash
# Install globally
npm install -g awesome-claude

# Run interactive setup
awesome-claude
```

### Custom Installation Path

During setup, choose "Custom Path" and specify your preferred location:

```
? Select installation location:
❯ User Home Directory (/Users/username/.claude)
  Application Support (/Users/username/Library/Application Support/Claude)
  Custom Path
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

## 🔧 Advanced Configuration

### Custom CLAUDE.md

The installed `CLAUDE.md` contains advanced AI instructions including:

- Transcendent autonomous agent protocols
- Infinite creativity amplification
- Maximum resource utilization directives
- Comprehensive operating principles

### Integration with Development Workflow

The configuration files integrate seamlessly with:

- Code editors (VS Code, Vim, etc.)
- Git workflows (hooks and automation)
- CI/CD pipelines
- Documentation generators

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
