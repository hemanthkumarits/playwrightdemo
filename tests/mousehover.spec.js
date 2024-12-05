import {test,expect} from '@playwright/test'

test('mouse hover',async({page})=>{


    await page.goto('https://demo.opencart.com/');
    const desktop =await page.locator("//*[@id='narbar-menu']/ul/li[1]/a")
    const mac = await page.locator("//*[@id='narbar-menu']/ul/li[1]/div/div/ul/li[2]/a")
    //mouse hover
    await desktop.hover();
    await mac.hover();

    await page.waitForTimeout(3000);
})