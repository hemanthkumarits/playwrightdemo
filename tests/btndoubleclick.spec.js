import {test,expect} from '@playwright/test';
test('dbclick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btn = await page.locator("//*[@id='HTML10']/div[1]/button");

    await btn.dblclick();

    const f2 = await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(3000);
})