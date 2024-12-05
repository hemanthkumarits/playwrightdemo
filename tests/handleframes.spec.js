const {test,expect} = require('@playwright/test');

test('handle', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total no.of frames 

    const allframes = await page.frames()
    console.log("no.of frames:",allframes.length)

    //using name or url of the page

    await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("//*[@id='id1']/div/input",'hello')

    await page.waitForTimeout(3000);
})