import {test,expect} from '@playwright/test';

test('i',async({page})=>{

    await page.goto('https://www.redbus.in/')

    page.on('dialog',async dialog=>{
        expect(dialog.type().toContain('alert'))

        await dialog.accept();
    }) 

    await page.locator('#src').fill('DELHI');

    //await page.waitForTimeout(3000);

    //await page.locator("//*[@id='account_dd']/div[1]/i[2]").click();
    //await page.locator("//*[@id='user_sign_in_sign_up']/span").click();

    await page.waitForTimeout(3000);
    await page.close();

})