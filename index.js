/**
 * Awesome Claude - A curated collection of Claude resources
 *
 * This package serves as a comprehensive resource hub for Claude AI,
 * including tools, examples, documentation, and best practices.
 *
 * @author Aung Myo Kyaw
 * @version 0.0.1
 * @license MIT
 */

export default class AwesomeClaude {
  constructor() {
    this.name = "awesome-claude";
    this.version = "0.0.1";
    this.description =
      "A curated collection of awesome Claude resources, tools, and examples";
  }

  /**
   * Get package information
   * @returns {Object} Package metadata
   */
  getInfo() {
    return {
      name: this.name,
      version: this.version,
      description: this.description,
      author: "Aung Myo Kyaw",
      license: "MIT"
    };
  }

  /**
   * Welcome message for users
   * @returns {string} Welcome message
   */
  welcome() {
    return `Welcome to ${this.name} v${this.version}! 🎨\n${this.description}`;
  }
}

// Export an instance for immediate use
export const awesomeClaude = new AwesomeClaude();

// If this file is run directly, display welcome message
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(awesomeClaude.welcome());
  console.log("\n🚀 Getting started with Awesome Claude:");
  console.log("- Check out the README.md for documentation");
  console.log("- Run npm run dev for development mode");
  console.log("- Run npm test to run tests");
}
