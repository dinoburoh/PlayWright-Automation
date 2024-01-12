// import { test, expect } from '@playwright/test';

const { test, expect } = require('@playwright/test');

test.describe('Leads Creation', () => {

  test('Create Contact', async ({ page }) => {

    test.slow();
    await page.goto('https://org1e1ce0b9.crm8.dynamics.com/');

    //zoom out brownser page
    await page.keyboard.press('Control');
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('-');
      await page.keyboard.up('-');
    }
    await page.keyboard.up('Control');


    // await page.evaluate(() => {
    //   document.body.style.transform = 'scale(0.75)'
    // })

    await page.getByLabel('Enter your email, phone, or').fill('dinoburoh@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#i0118').click();
    await page.locator('#i0118').fill('Dino7891##');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page).toHaveTitle('Apps - Dynamics 365');
    await page.frameLocator('iframe[title="AppLandingPage"]').locator('#SearchAndCommandBar > div').first().click();
    await page.frameLocator('iframe[title="AppLandingPage"]').getByLabel('Sales trial\r\nStart working less and selling more with Dynamics 365 Sales.\r\nPublished by Microsoft Dynamics 365.\r\nUnified Interface.\r\n11 of').click();
    await page.getByLabel('Contacts').locator('div').nth(3).click();
    await page.getByLabel('New', { exact: true }).click();
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('Test - ' + Math.floor(Math.random() * 41 + 1));
    await page.getByLabel('Last Name').click();
    await page.getByLabel('Last Name').fill('Contact');
    await page.getByLabel('Job Title').fill('Explore');
    await page.getByLabel('ZIP/Postal Code').fill('378946');
    await page.getByLabel('Save and Close Options').press('Tab');
    await page.getByLabel('Description').click();
    await page.getByLabel('Description').fill('New Contact');
    await page.getByLabel('City').press('Tab');
    await page.getByLabel('Save and Close', { exact: true }).press('Enter');
  });

})
