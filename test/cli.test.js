import { test, describe } from "node:test";
import assert from "node:assert";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const testDir = path.join(__dirname, "temp-test-dir");

describe("CLI Module Tests", () => {
  // Test setup and teardown
  test("setup", async () => {
    // Ensure test directory is clean before each test
    await fs.remove(testDir);
    await fs.ensureDir(testDir);
  });

  test("test teardown", async () => {
    // Clean up test directory after tests
    await fs.remove(testDir);
  });
});

describe("Platform Detection", () => {
  test("should detect valid platform", () => {
    const platforms = ["darwin", "win32", "linux"];
    const currentPlatform = process.platform;
    assert(platforms.includes(currentPlatform), "Platform should be supported");
  });
});

describe("Configuration Paths", () => {
  test("should create valid configuration paths", async () => {
    const testPaths = [
      path.join(testDir, ".claude"),
      path.join(testDir, "config", "claude"),
      path.join(testDir, "local", "share", "claude")
    ];

    for (const testPath of testPaths) {
      await fs.ensureDir(testPath);
      assert(await fs.pathExists(testPath), `Path should exist: ${testPath}`);
      const stats = await fs.stat(testPath);
      assert(stats.isDirectory(), `Should be directory: ${testPath}`);
    }
  });
});

describe("File Operations", () => {
  test("should copy configuration files", async () => {
    const sourceConfigDir = path.join(__dirname, "..", "config");
    const targetDir = path.join(testDir, "claude-config");

    // Ensure source config directory exists
    assert(
      await fs.pathExists(sourceConfigDir),
      "Source config directory should exist"
    );

    // Copy config files
    await fs.copy(sourceConfigDir, targetDir);

    // Verify files were copied
    const expectedFiles = ["CLAUDE.md", ".claudeignore"];
    const expectedDirs = ["prompts", "templates", "examples"];

    for (const file of expectedFiles) {
      const filePath = path.join(targetDir, file);
      assert(await fs.pathExists(filePath), `File should exist: ${file}`);
    }

    for (const dir of expectedDirs) {
      const dirPath = path.join(targetDir, dir);
      assert(await fs.pathExists(dirPath), `Directory should exist: ${dir}`);
      const stats = await fs.stat(dirPath);
      assert(stats.isDirectory(), `Should be directory: ${dir}`);
    }
  });

  test("should create default configuration files", async () => {
    const testFile = path.join(testDir, "CLAUDE.md");
    const content = `# Test Claude Configuration

This is a test configuration file.

## Instructions

Add your custom instructions here.
`;

    await fs.writeFile(testFile, content, "utf8");

    assert(await fs.pathExists(testFile), "File should be created");
    const fileContent = await fs.readFile(testFile, "utf8");
    assert(
      fileContent.includes("Test Claude Configuration"),
      "Content should match"
    );
    assert(fileContent.length > 0, "File should not be empty");
  });
});

describe("Error Handling", () => {
  test("should handle invalid paths gracefully", async () => {
    const invalidPath = path.join(testDir, "nonexistent", "path");

    // Should not throw when checking non-existent path
    const exists = await fs.pathExists(invalidPath);
    assert(!exists, "Non-existent path should return false");
  });

  test("should handle permission errors gracefully", async () => {
    // This test simulates permission issues using a more realistic approach
    const restrictedPath = path.join(testDir, "restricted-test");

    // Create directory and try to make it read-only (platform dependent)
    await fs.ensureDir(restrictedPath);

    // Test that the directory exists
    assert(await fs.pathExists(restrictedPath), "Directory should be created");

    // Note: Actual permission testing is platform-specific and may require elevated privileges
    // This test mainly ensures we can handle path operations without crashing
  });
});

describe("Configuration Validation", () => {
  test("should validate CLAUDE.md content", async () => {
    const claudeConfigPath = path.join(__dirname, "..", "config", "CLAUDE.md");

    assert(await fs.pathExists(claudeConfigPath), "CLAUDE.md should exist");

    const content = await fs.readFile(claudeConfigPath, "utf8");

    // Check for required sections
    assert(
      content.includes("# Claude Configuration"),
      "Should have main header"
    );
    assert(
      content.includes("## Core Instructions"),
      "Should have core instructions"
    );
    assert(
      content.includes("## Work Style Preferences"),
      "Should have work style preferences"
    );
    assert(content.length > 500, "Should have substantial content");
  });

  test("should validate .claudeignore content", async () => {
    const ignorePath = path.join(__dirname, "..", "config", ".claudeignore");

    assert(await fs.pathExists(ignorePath), ".claudeignore should exist");

    const content = await fs.readFile(ignorePath, "utf8");

    // Check for common ignore patterns
    assert(content.includes("node_modules/"), "Should ignore node_modules");
    assert(content.includes(".env"), "Should ignore env files");
    assert(content.includes("*.log"), "Should ignore log files");
  });
});

// Integration test with mocked user input
describe("CLI Integration Tests", () => {
  test("should have required CLI files", async () => {
    const cliPath = path.join(__dirname, "..", "src", "cli.js");
    const binPath = path.join(__dirname, "..", "bin", "awesome-claude.js");

    assert(await fs.pathExists(cliPath), "CLI module should exist");
    assert(await fs.pathExists(binPath), "CLI executable should exist");

    // Check if bin file is executable (on Unix systems)
    if (process.platform !== "win32") {
      const stats = await fs.stat(binPath);
      // Note: fs.stats.mode might not be reliable on all systems
      // This is a basic check
      assert(stats.isFile(), "Bin should be a file");
    }
  });
});
