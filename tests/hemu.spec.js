import{test,expect} from'@playwright/test';

test('project',async({page})=>{
    await page.goto('https://www.cricbuzz.com/cricket-match/live-scores')
    const pageTitle = await page.title();
    console.log(pageTitle);

    const URL = await page.url();
    console.log(URL);

    await expect(page).toHaveURL('https://www.cricbuzz.com/cricket-match/live-scores');

})