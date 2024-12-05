const{test,expect}=require('@playwright/test');
test ('multi',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    //multi select drop down
    //await page.selectOption("id=colors",['Blue','Yellow'])
    
    //assertions check no.of options in drop down

    //const options=await page.locator('#colors option')
    //await expect(options).toHaveCount(5);

    //check no.of options  javascript array

    //const options=await page.$$('#colors option')
    //console.log("no.of options:",options.length);
    //await expect(options.length).toBe(5);

    //3.prarticular value present
    const content=await page.locator('#colors').textContent();
    //await expect(content.includes('Blue')).toBeTruthy();

    await expect(content.includes('Black')).toBeFalsy();



    await page.waitForTimeout(5000);

})