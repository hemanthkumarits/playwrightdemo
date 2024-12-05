const {test,expect,chromium} = require('@playwright/test');

test('bb',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()

    const all = context.pages()
    console.log("no .of pages crtaed",all.length);
})