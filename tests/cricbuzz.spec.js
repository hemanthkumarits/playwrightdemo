import{test,expect} from '@playwright/test';
test('cricbuzz', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("id='male'").check();
    expect(await page.locator("id='male'")).toBeChecked();
    await page.waitForTimeout(3000);

    await page.close();
})