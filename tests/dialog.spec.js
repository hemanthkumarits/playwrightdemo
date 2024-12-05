import {test,chromium, expect} from '@playwright/test';
test('alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
        //expect(dialog.type()).toContain('alert')
        //expect(dialog.type()).toContain('I am an a alert box')
        await dialog.accept()
    })

    await page.click("//*[@id='HTML9']/div[1]/button[1]")
    await page.waitForTimeout(5000);
})