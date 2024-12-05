import {test,expect}from'@playwright/test';
test('aa',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill('hemanth');
    await page.locator('#phone').fill('733074611');

    await page.locator('#male').check();

    await page.locator('#tuesday').check();

    await page.locator('#country').selectOption('Germany');

    await page.fill('#datepicker','03/08/1999');

    await page.waitForTimeout(3000);


})