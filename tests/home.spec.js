const {test, expect} = require('@playwright/test');
test('homepage',async ({page}) =>{

    await page.goto('https://demoblaze.com/');
    const pageTitle= await page.title();
    console.log('page title:',pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url();
    console.log('page URL is:',pageURL);

    await expect(page).toHaveURL('tps://demoblaze.com/ht');

    await page.close();

})