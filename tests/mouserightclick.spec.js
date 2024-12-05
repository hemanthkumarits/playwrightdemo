import {test,expect} from '@playwright/test';
test('rightclick',async({page})=>{

    const Btn = await page.goto('http://swisnl.github.io/jQuery-contextMenu/');
    //await page.locator("/html/body/div/section/div/div/div/[2]/img")

    await Btn.click({button:'right'});

})