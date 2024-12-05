const {test,expect,chromium} = require ('@playwright/test');

test('m',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1= await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log('no.of pages',allPages.length)

    await page1.goto('https://www.cricbuzz.com/');
    const currentUrl = await page1.url();
    console.log(currentUrl);
})