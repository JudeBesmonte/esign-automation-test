import { test, expect } from '@playwright/test';

test('Change profile information', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Enter your email').fill('chaechae@email.com');
    await page.getByPlaceholder('Enter your password').fill('asdfasdf');
    await page.getByRole('button', { name: 'Sign In' }).click();

  await page.locator('button[aria-haspopup="menu"]').click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
});
