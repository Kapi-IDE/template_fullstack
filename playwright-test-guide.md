# Playwright Test Guide for EduAI Coder

This document provides guidance on running and maintaining the Playwright automated tests for the EduAI Coder application.

## Table of Contents
1. [Test Setup](#test-setup)
2. [Running Tests](#running-tests)
3. [Test Structure](#test-structure)
4. [Visual Testing](#visual-testing)
5. [Video Recording](#video-recording)
6. [Troubleshooting](#troubleshooting)

---

## Test Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- EduAI Coder frontend and backend running locally

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## Running Tests

### Running All Tests
To run all tests across all configured browsers:
```bash
npm run test:e2e
```

### Running Specific Tests
To run a specific test file:
```bash
npx playwright test tests/homepage.spec.js
```

To run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

### Viewing Test Reports
After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

---

## Test Structure

### Test Files
- `home.spec.js`: Tests for the homepage, navigation to lessons, and navbar functionality
- `homepage.spec.js`: Simplified test for the homepage

### Test Configuration
The test configuration is defined in `playwright.config.js` and includes:
- Multiple browser configurations (Chrome, Firefox, Safari, Mobile Chrome)
- Screenshot and video recording settings
- Timeouts and retry settings
- Web server configuration for starting the frontend during tests

---

## Visual Testing

### Screenshots
Screenshots are automatically captured during test execution and saved to the `test-results` directory. The following screenshots are captured:

1. Welcome message on the homepage
2. Lessons page after navigation
3. About page after navigation

### Viewing Screenshots
Screenshots can be found in the `test-results` directory after test execution. They can also be viewed in the HTML report.

---

## Video Recording

### Video Configuration
Videos are automatically recorded for test runs based on the configuration in `playwright.config.js`. By default, videos are recorded on the first retry of a failed test.

To enable video recording for all tests, modify the configuration:
```javascript
video: 'on'
```

### Viewing Videos
Videos can be found in the test results directory after test execution. They can also be viewed in the HTML report.

---

## Troubleshooting

### Common Issues

#### Tests Fail to Start
If tests fail to start, ensure:
- The frontend application is not already running on port 3000
- All dependencies are installed correctly
- Playwright browsers are installed

#### Browser Launch Failures
If browsers fail to launch:
```bash
npx playwright install
```

#### Screenshots or Videos Not Generated
If screenshots or videos are not generated:
- Check the configuration in `playwright.config.js`
- Ensure the `test-results` directory exists and is writable

#### Test Timeouts
If tests timeout:
- Increase the timeout in `playwright.config.js`
- Check if the application is responding slowly

---

## Extending Tests

### Adding New Tests
To add new tests:
1. Create a new test file in the `tests` directory
2. Import the required Playwright modules
3. Write your test cases following the existing patterns
4. Run the tests to verify they work as expected

### Best Practices
- Keep tests independent of each other
- Use descriptive test names
- Add appropriate assertions
- Use page objects for complex pages
- Add comments to explain complex test logic

---

## CI/CD Integration

### GitHub Actions
To run tests in GitHub Actions, add the following to your workflow:

```yaml
- name: Install dependencies
  run: cd frontend && npm ci

- name: Install Playwright browsers
  run: cd frontend && npx playwright install --with-deps

- name: Run Playwright tests
  run: cd frontend && npm run test:e2e
```

### Test Reports in CI
To save test reports in CI:

```yaml
- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: frontend/playwright-report/
    retention-days: 30
```
