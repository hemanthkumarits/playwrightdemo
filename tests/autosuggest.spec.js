import{test,expect} from '@playwright/test';

test('auto',async({page})=>{
    await page.goto('https://www.wikipedia.org/')
    await page.locator('#searchInput').fill('Hyderabad');
    await page.waitForTimeout(3000)

    //const URL= await page.url();
    //console.log(URL);
})