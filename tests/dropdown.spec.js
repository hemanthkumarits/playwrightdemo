const{test,expect}=require('@playwright/test');
test('dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //select drop down using label
    //await page.locator("#country").selectOption({label:'India'});

    //await page.locator("#country").selectOption("Canada");//visible test
    //await page.locator("#country").selectOption({value:'uk'});//value
    //await page.locator("#country").selectOption({index:5});//index using select
    //await page.selectOption("#country",'India')

    //assertions
    //1.check number of options in a drop down
    /*const options=await page.locator('#country option')
    await expect(options).toHaveCount(10);*/

    //2.check noof option in drop down
    const options=await page.$$('#country option')
    /*for(const option of options){
        const lists=await option.textContent();
        console.log(lists);
    }*/
    //console.log("no of opt:",options.length)
    //await expect(options.length).toBe(10)

    //3.check practicular option in drop down
   // const content=await page.locator("#country").textContent()
    //await expect(content.includes('France')).toBeTruthy();

    //4.presence of element in dropdown using loop
    /*let status=false;
    for(const option of options){

        //console.log(await option.textContent())
        let value=await option.textContent();
        if(value.includes('France')){
            status=true
            break;
        }
    }
    expect(status).toBeTruthy();*/

    //select the from the dropdown using loop
    for(const option of options){

        //console.log(await option.textContent())
        let value=await option.textContent();
        if(value.includes('France')){
            await page.selectOption("#country",value);
            break;
        }
    }



    await page.waitForTimeout(5000);
})