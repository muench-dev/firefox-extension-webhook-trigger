module.exports = {
  verbose: false,
  ignoreFiles: [
    ".amo-upload-uuid",
    "AGENTS.md",
    "package.json",
    "package-lock.json",
    "README.md",
    "jest.config.js",
    "web-ext-config.cjs",

    // Browser-specific manifest files should be excluded from the build
    // For Firefox builds, copy manifest.firefox.json to manifest.json before building
    // For Chrome builds, copy manifest.chrome.json to manifest.json before building
    "manifest.firefox.json",
    "manifest.chrome.json",

    // directories to ignore
    ".github",
    ".idea",
    ".junie",
    "docs",
    "tests"
  ],
  build: {
    overwriteDest: true,
  },
};
