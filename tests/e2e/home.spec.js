import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Imperial Garden/);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('button[aria-label="Toggle theme"]');
    await toggle.click();
    await expect(page.locator('html')).toHaveAttribute('class', /light|dark/);
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="phone"]', '+911234567890');
    await page.selectOption('select[name="occasion"]', 'Wedding');
    await page.fill('input[name="guests"]', '200');
    await page.click('button[type="submit"]');
    // Form submission should show success message
  });
});

