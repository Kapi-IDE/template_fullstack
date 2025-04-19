// @ts-check
const { test, expect } = require('@playwright/test');

// Define browser-specific tests
test.describe.configure({ mode: 'parallel' });

// Navigate to the home page before each test
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
});

test('should display the welcome message', async ({ page }) => {
  // Assert that the page contains the welcome heading
  const heading = page.locator('h1:has-text("Welcome to EduAI Coder")');
  await expect(heading).toBeVisible();

  // Take a screenshot of the welcome message
  await page.screenshot({ path: 'test-results/welcome-message.png', fullPage: false });
});

test('should navigate to lessons page when clicking "Explore Lessons"', async ({ page }) => {
  // Find the "Explore Lessons" button and click it
  const lessonButton = page.locator('a:has-text("Explore Lessons")');
  await expect(lessonButton).toBeVisible();

  // Video will be automatically recorded based on config

  await lessonButton.click();

  // Wait for navigation to complete
  await page.waitForURL(/.*\/lessons/);

  // Check that we're on the lessons page
  await expect(page).toHaveURL(/.*\/lessons/);

  // Verify the lessons page title is visible
  const lessonsHeading = page.locator('h1:has-text("Available Lessons")');
  await expect(lessonsHeading).toBeVisible();

  // Take a screenshot of the lessons page
  await page.screenshot({ path: 'test-results/lessons-page.png', fullPage: true });
});

test('navbar should work properly', async ({ page }) => {
  // Check if navbar is visible
  const navbar = page.locator('nav');
  await expect(navbar).toBeVisible();

  // Video will be automatically recorded based on config

  // Check if navigation links work
  const aboutLink = page.locator('nav').locator('a:has-text("About")');
  await expect(aboutLink).toBeVisible();
  await aboutLink.click();

  // Wait for navigation to complete
  await page.waitForURL(/.*\/about/);

  // Verify we're on the about page
  await expect(page).toHaveURL(/.*\/about/);

  // Check if the About page title is visible
  const aboutHeading = page.locator('h1:has-text("About EduAI Coder")');
  await expect(aboutHeading).toBeVisible();

  // Take a screenshot of the about page
  await page.screenshot({ path: 'test-results/about-page.png', fullPage: true });
});
