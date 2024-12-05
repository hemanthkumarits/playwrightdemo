import{test,expect} from '@playwright/test';

test('login',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.evaluate(()=>{
        window.scrollBy(0,20);

    });

    


});