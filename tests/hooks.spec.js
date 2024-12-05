import { test,expect} from '@playwright/test';

test.only('homepage',async({page})=>{
    //login
    await page.goto('https://demoblaze.com/')

    await page.locator('#login2').click();
    await page.locator("#loginusername").fill('hemanth');
    await page.locator('#loginpassword').fill('test@1234');
    await page.locator("//button[normalize-space()='Log in']").click();
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9);

    await page.locator('#logout2').click();

})

test('Add cart',async({page})=>{

})