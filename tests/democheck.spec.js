const{test,expect}  = require('@playwright/test');
test("check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //check box checked or unchecked
    await page.locator("//*[@id='monday']").check();
    expect(await page.locator("//*[@id='monday']")).toBeChecked();
    await page.waitForTimeout(5000);

})