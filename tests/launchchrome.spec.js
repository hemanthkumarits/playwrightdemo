import {test,expect,chromium} from '@playwright/test';

test('my test',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");

    page.close();

});