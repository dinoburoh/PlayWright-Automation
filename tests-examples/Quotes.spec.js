const { test, expect } = require('@playwright/test')
// const { navigateToApps } = import('/utils/commons.js')

test.describe("Quotes and Order creation", () => {

    const appID = process.env.SH_APPID
    test.beforeAll(async ({ page }) => {
        await navigateToApps(page, stringFormat(appId), 'Sales Hub')
    })

    test("Create quotes", async ({ page }) => {

        test.slow()
        await page.goto('https://org1e1ce0b9.crm8.dynamics.com/')

    })
})
