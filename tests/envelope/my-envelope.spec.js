// @ts-check
import { test, expect } from '@playwright/test';

test('Create Envelope, and upload documents', async ({ page }) => {
    await page.goto('https://e-signature-lite.vercel.app/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Enter your email').fill('newemail@email.com');
    await page.getByPlaceholder('Enter your password').fill('asdfasdf');
    await page.getByRole('button', { name: 'Sign In' }).click();


    // Navigate to the "My Envelopes" page and create a new envelope
    await page.getByRole('link', { name: 'My Envelopes' }).click();
    await page.getByRole('button', { name: 'New Envelope' }).first().click();
    await page.getByRole('textbox', { name: 'Title' }).fill('Test Envelope');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test Envelope Description');
    await page.getByRole('button', { name: 'Create' }).click();

    // Upload a document to the envelope
    await page.getByRole('button', { name: 'Upload Document' }).nth(1).click();
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByRole('button', { name: 'Upload Document' }).click(),
    ]);
    await fileChooser.setFiles('tests/test-documents/sample.pdf');
});