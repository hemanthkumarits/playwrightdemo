import {test,expect,chromium} from '@playwright/test';

test('mytest',async()=>{


  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('#name').fill('hemanth')

  await page.waitForTimeout(1000);
})