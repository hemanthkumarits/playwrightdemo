const {test, expect} = require('@playwright/test');
test('homepage',async ({page}) =>{
    await page.goto('https://demoblaze.com/');

    await page.click('id=login2');
    await page.fill('#loginusername','hemanth')

    await page.fill("input[id='loginpassword']",'test@123')
    await page.waitForTimeout(3000);

    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    const logoutlink=await page.locator("//a[normalize-space()='Log out]")
    await expect(logoutlink).toBeVisisble()
    
    await page.close();

})