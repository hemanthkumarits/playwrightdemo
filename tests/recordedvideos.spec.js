const {test,expect} = require ('@playwright/test');
test('book',async({page}) =>{
    await page.goto('https://in.bookmyshow.com/explore/home/madanapalle'); 

    await page.click('//*[@id="super-container"]/div[2]/div[1]/header/div[1]/div/div/div/div[2]/div[2]/div[1]');

    await page.click('//*[@id="modal-root"]/div/div/div/div/div[2]/div/div[1]/div/div[1]/div/div');

    await page.fill("//*[@id='identifierId']",'hemanth@gmail.com');

    await page.click('//*[@id="identifierNext"]/div/button/div[3]')

    await page.fill("//*[@id='password']/div[1]/div/div[1]/input",'hemanth');

    await page.click("//*[@id='passwordNext']/div/button/div[3]");


    await page.close();

})