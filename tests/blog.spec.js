import {test,expect} from '@playwright/test';
test('test',async({page})=>{
    //await page.goto("https://testautomationpractice.blogspot.com/")

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill("hemanth");

    await page.locator("#male").check();


    await page.locator("#monday").check();

    await page.locator("#country").selectOption("Canada");

    await page.selectOption("#colors",['green','red']);

    await page.locator("#datepicker").fill("17/07/2024");

    await page.locator("//tbody/tr[1]/td[4]/input[1]").check();
    


    await page.waitForTimeout(10000);
})