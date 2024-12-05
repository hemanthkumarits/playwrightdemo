const {test, expect} = require('@playwright/test');
test('demo',async ({page}) =>{
    await page.goto('https://in.bookmyshow.com/explore/home/madanapalle');
    const pageTitle =await  page.title();

    console.log('page title:', pageTitle);

    const pageURL=page.url();
    console.log('page URL is:',pageURL);

    await page.close();
})