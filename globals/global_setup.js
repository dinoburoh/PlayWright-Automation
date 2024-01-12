const { chromium, FullConfig } = require('@playwright/test')

const username = process.env.DYN365_USERNAME ?? '';
const password = process.env.DYN365_PASSWORD ?? '';
const orgurl = process.env.DYN365_ORGURL ?? '';

async function globalSetup(config) {
    const { storageState } = config.projects[0].use;
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await login(page, orgurl, username, password);
    // await page.context().storageState({
    //     path: authFile,
    // });
    //await browser.close();
}