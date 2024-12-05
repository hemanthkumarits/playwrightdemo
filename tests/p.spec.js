import {test,expect} from '@playwright/test';

test('p',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const currentUrl = await page.url()
    console.log(currentUrl)

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    await page.locator('.oxd-button oxd-button--medium oxd-button--main orangehrm-login-button').click();

    await page.locator('.oxd-userdropdown-img').isVisible();

    await page.waitForTimeout(2000);
})