// @ts-check
import { test, expect } from '@playwright/test';

test('Visit e-signature lite and login to the application', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Enter your email').fill('chaechae@email.com');
    await page.getByPlaceholder('Enter your password').fill('asdfasdf');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Skip for Now' }).click();
});