import {test,expect} from '@playwright/test';

test ('page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})

})

test('full page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullPage.png',fullPage:true})
    
})

test.only('element screenshot', async({page})=>{

    await page.goto('https://demo.opencart.com/');
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'tests/screenshots/'+Date.now()+'macBookPage.png'})
    
})