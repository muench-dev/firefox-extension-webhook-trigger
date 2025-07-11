# Firefox Extension Project Instructions

## Overview
This project is a Firefox and Chromium extension. The codebase includes manifest files, localized messages, icons, and scripts for the extension's popup and options pages.

## Project Structure

- `manifest.json`: Extension manifest file.
- `popup/`: Popup UI and logic.
- `options/`: Options page UI and logic.
- `utils/`: Utility functions and scripts.
- `_locales/`: Localization files.
- `icons/`: Extension icons.

## Development
1. **Edit code:**
    - Update HTML, CSS, or JS files in `popup/`, `options/`, `utils` as needed.
    - Update `manifest.json` for permissions or features.
    - Add or update translations in `_locales/`.
    - Document all features in the `README.md`.
2. **Test the extension:**
    - Run the tests with `npm test`. If a test fails, check the console for errors and try to fix them. Repeat until all tests pass.

## Contributing
- Follow standard pull request and code review practices.
- Keep code readable and well-documented.
- Update documentation and translations as needed.
