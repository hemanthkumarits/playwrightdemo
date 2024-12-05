const{test,expect}  = require('@playwright/test');
test("check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //check box checked or unchecked
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='tuesday' and @type='checkbox']").isChecked()).toBeFalsy();
    //handle multiple check boxes
    const checkboxelocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",    //select multiple check boxex
        "//input[@id='saturday' and @type='checkbox']"];
        for(const locator of checkboxelocators){
            await page.locator(locator).check();
        }
        await page.waitForTimeout(5000);


        for(const locator of checkboxelocators){  //unselect multiple check boxes if selected check boxes
            if(await page.locator(locator).isChecked());
            await page.locator(locator).uncheck();

        }


    await page.waitForTimeout(5000);
})