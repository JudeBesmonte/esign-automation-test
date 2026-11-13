import { test, expect } from '@playwright/test';

test('Change profile information', async ({ page }) => {
  await page.goto('https://e-signature-lite.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('chaechae@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('asdfasdf');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // click avatar icon
  await page.locator('#radix-_r_21_').click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
});