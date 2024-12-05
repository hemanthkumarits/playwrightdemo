import {test,expect} from '@playwright/test';

test('i',async({page})=>{

    await page.goto('https://www.facebook.com/login/');

    //const pageURL = await page.url()
    //console.log(pageURL);
    await page.locator("//*[@id='login_link']/a[2]").click();

    await page.locator("#iu_0_5_KY").check();


    await page.waitForTimeout(3000);
    await page.close();

})