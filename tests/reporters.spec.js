const {test,expect} = require ('@playwright/test');

test('test1', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

test('test2', async ({page})=>{
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await expect(page).toHaveURL('https://www.opencart.com/index.php?route=cms/demo');
})

test('test3', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})