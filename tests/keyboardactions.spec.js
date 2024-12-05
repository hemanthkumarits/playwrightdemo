import {test,expect} from '@playwright/test';

test('key',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.locator("[name='text1']").fill('hello playwright')
    //cntrl+a

    await page.keyboard.press('Control+A')
    //cntrl+c

    await page.keyboard.press('Control+C')
    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    //cntrl+v

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})