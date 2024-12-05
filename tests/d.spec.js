import {test,expect} from '@playwright/test';

test('d',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption('India');

    await page.waitForTimeout(3000)
})