const { test, expect } = require('@playwright/test');

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toContainText('Welcome to EduAI Coder');
  
  // Check if the Explore Lessons button is visible
  const exploreButton = page.locator('a:has-text("Explore Lessons")');
  await expect(exploreButton).toBeVisible();
});
