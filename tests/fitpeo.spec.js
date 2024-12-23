import {test,expect,chromium} from '@playwright/test';

test('fitpeo',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

   // url open in browser
    await page.goto("https://www.fitpeo.com/");
    const currentUrl = await page.url();
    console.log(currentUrl);
    
    //navigate revenue calculator
    await page.locator("//div[contains(text(),'Revenue Calculator')]").click();

    //await page.pause();
    await page.evaluate( ()=>{
        window.scrollBy(0,100);
    });

    //await page.waitForSelector("//span[@class='MuiSlider-thumb MuiSlider-thumbSizeMedium MuiSlider-thumbColorPrimary MuiSlider-thumb MuiSlider-thumbSizeMedium MuiSlider-thumbColorPrimary css-sy3s50']");
    //const s = await page.$("//span[@class='MuiSlider-thumb MuiSlider-thumbSizeMedium MuiSlider-thumbColorPrimary MuiSlider-thumb MuiSlider-thumbSizeMedium MuiSlider-thumbColorPrimary css-sy3s50']");
    //let value = page.locator("//input[@id=':rf:']").fill("520");
    /*let text = await value.inputValue();
    console.log('initial text'+text);
    let targetAmount = "2000";

    let isCompleted = false;
    
    if(s){
        while(!isCompleted){
            let srcBound = await s.boundingBox();
            if(srcBound){
                await page.mouse.move(srcBound.x + srcBound.width/2,srcBound.y + srcBound.height/2);
                await page.mouse.down();
                await page.mouse.move(srcBound.x+10,srcBound.y+srcBound.height/2);
                await page.mouse.up();

                let text = await value.inputValue();

                if(text == targetAmount){
                    isCompleted = true;
                }
            }
        }
    } */

    
    await page.locator("(//input[@type='checkbox'])[1]").check();
    await page.locator("(//input[@type='checkbox'])[2]").check();
    await page.locator("(//input[@type='checkbox'])[3]").check();
    await page.locator("(//input[@type='checkbox'])[4]").check();

   const value = await page.locator("//p[normalize-space()='$31920']")
   console.log(value);


    await page.waitForTimeout(3000);
})