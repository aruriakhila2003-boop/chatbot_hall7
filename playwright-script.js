import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByText('Est. 2005 · Hyderabad, TelanganaWelcome to EduReach CollegeYour Gateway to').click();
  await page.getByText('Est. 2005 · Hyderabad, TelanganaWelcome to EduReach CollegeYour Gateway to').click();
  await page.getByText('EduReach College is a premier').click();
  await page.locator('#about').click();
  await page.getByText('+').nth(3).click();
  await page.getByText('₹42 LPA').click();
  await page.locator('#courses').click();
  await page.getByRole('button', { name: 'Chat with EduReach Bot' }).click();
  await page.getByRole('button', { name: 'What courses do you offer?' }).click();
  await page.getByRole('textbox', { name: 'Ask a question...' }).click();
  await page.getByRole('textbox', { name: 'Ask a question...' }).click();
  await page.getByRole('textbox', { name: 'Ask a question...' }).fill('  ');
  await page.getByText('Sorry, something went wrong.').click();
  await page.getByText('Hi there! I\'m EduReach Bot.').click();
  await page.getByText('What courses do you offer?').click();
  await page.goto('http://localhost:5173/');
});