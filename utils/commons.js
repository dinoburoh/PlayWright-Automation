const { page, expect } = require('@playwright/test')




async function navigateToApps(page, appId, appName) {
    console.log('Navigate to ' + appName.toString() + ' - Start');
    await page.goto('/main.aspx?appid=' + appId.toString());
    await expect(page.getByRole('button', { name: appName })).toBeTruthy();
    console.log('Navigated to ' + appName.toString() + '- Success');
}