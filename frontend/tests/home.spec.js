// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('http://localhost:3000/');
  });

  test('should display the welcome message', async ({ page }) => {
    // Assert that the page contains the welcome heading
    const heading = page.locator('h1:has-text("Welcome to EduAI Coder")');
    await expect(heading).toBeVisible();
  });

  test('should navigate to lessons page when clicking "Explore Lessons"', async ({ page }) => {
    // Find the "Explore Lessons" button and click it
    const lessonButton = page.locator('a:has-text("Explore Lessons")');
    await lessonButton.click();
    
    // Check that we're on the lessons page
    await expect(page).toHaveURL(/.*\/lessons/);
    
    // Verify the lessons page title is visible
    const lessonsHeading = page.locator('h1:has-text("Available Lessons")');
    await expect(lessonsHeading).toBeVisible();
  });

  test('navbar should work properly', async ({ page }) => {
    // Check if navbar is visible
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    
    // Check if navigation links work
    const aboutLink = page.locator('nav').locator('a:has-text("About")');
    await aboutLink.click();
    
    // Verify we're on the about page
    await expect(page).toHaveURL(/.*\/about/);
    
    // Check if the About page title is visible
    const aboutHeading = page.locator('h1:has-text("About EduAI Coder")');
    await expect(aboutHeading).toBeVisible();
  });
});
