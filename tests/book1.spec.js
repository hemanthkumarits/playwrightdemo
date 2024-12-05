const {test,expect} = require ('@playwright/test');
test('book',async({page}) =>{
    await page.goto('https://in.bookmyshow.com/explore/home/madanapalle');

    const links= await page.$$('a');

    for(const link of links){
        const linktest= await link.textContent();
        console.log(linktest);
    }


    await page.close();

})