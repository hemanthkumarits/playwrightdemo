import {test,expect} from '@playwright/test'

test('c',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#sunday').check();

    const checkboxes=['#sunday','#monday','#tuesday']
    for(const s of checkboxes){
        await page.locator(s).check();
    
    }

    await page.waitForTimeout(3000);
})