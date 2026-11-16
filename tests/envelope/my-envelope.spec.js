// @ts-check
import { test, expect } from '@playwright/test';

test('Create Envelope, and upload documents', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Enter your email').fill('chaechae@email.com');
    await page.getByPlaceholder('Enter your password').fill('asdfasdf');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('link', { name: 'My Envelopes' }).click();
    await page.getByRole('button', { name: 'New Envelope' }).nth(1).click();
    await page.getByPlaceholder('Enter title...').fill('Test Envelope');
    await page.getByPlaceholder('Enter title...').fill('Test Envelope');
});