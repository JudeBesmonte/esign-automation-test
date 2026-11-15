import { test, expect } from '@playwright/test';

test('Change user full name and email address', async ({ page }) => {
  await page.goto('https://e-signature-lite.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('newemail@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('asdfasdf');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.locator('button[aria-haspopup="menu"]').click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('new name');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('newemail@email.com');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.goto('https://e-signature-lite.vercel.app/profile');

    // Verify that the changes have been saved successfully
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('new name');
  await expect(page.getByRole('textbox', { name: 'Email Address' })).toHaveValue('newemail@email.com');
});

test('Change user profile avatar', async ({ page }) => { 
  
  await page.goto('https://e-signature-lite.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('newemail@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('asdfasdf');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button').nth(2).click();

});

