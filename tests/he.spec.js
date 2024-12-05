import{test,expect} from'@playwright/test';
test('he',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
    await page.locator('#name').fill("hemanth");
    await page.locator('#male').check();
    await page.waitForTimeout(3000);
    
})