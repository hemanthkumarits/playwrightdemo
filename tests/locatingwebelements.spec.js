const {test,expect} = require('@playwright/test');
test('locating',async({page})=>{
    await page.goto('https://demoblaze.com/');

    /*const links= await page.$$('a');

    for(const link of links){
        const linktest= await link.textContent();
        console.log(linktest);
    }*/
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);

    }

    await page.close();
})