import { test, expect } from '@playwright/test';

test('Go to the e-signature website', async ({ page }) => {
  await page.goto('https://e-signature-lite.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-Signature/);
});