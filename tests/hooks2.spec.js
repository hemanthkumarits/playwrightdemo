import {test,expect} from '@playwright/test';

let page;
test.beforeEach(async ({browser})=>{
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');
    

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='log in']").click();
})

test.afterEach(async ()=>{
    await page.locator("id='logout2'").click();
})

test('home', async()=>{
    const products = await page.$$('.hrefch');
    expect(products).toBe(9);
})
test('addcart', async ()=>{
    await page.locator('//*[@id="tbodyid"]/div[1]/div/a/img').click();
    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();

    page.on('dialog',async dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
});