import{chromium} from '@playwright/test';

(async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');
    

    const URL = await page.url();
    console.log(URL);
})();