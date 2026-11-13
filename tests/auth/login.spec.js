// @ts-check
import { test, expect } from '@playwright/test';

test('Visit e-signature lite and login to the application', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();

  
});


test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/auth/login');
    await page.getByPlaceholder('Enter your email').fill('demo_user1@email.com');
    await page.getByPlaceholder('Enter your password').fill('demo_password');
    await page.getByRole('button', { name: 'Sign In' }).click();
});