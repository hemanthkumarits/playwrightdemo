const{test,expect} = require('@playwright/test');

/*test.only('test1',async({page})=>{
    console.log("this is test 1")
});
//skip
test.skip('test2',async({page})=>{
    console.log("this is test 2")
});*/

/*test('test3',async({page,browserName})=>{
    console.log("this is test 3")
    if(browserName=='firefox'){
        test.skip()
    }
});*/
//fix me
/*test('test4',async({page})=>{
    test.fixme()
    console.log("test 4....")
})*/

//fail

/*test('test5',async({page,browserName})=>{
    console.log("test5......")
    if(browserName=='firefox'){
        test.fail();
    }
    //test.fail()  //expect
    //expect(1).toBe(2); //both expect and actual fail 
})*/

//slow
test('test7',async({page})=>{
    test.setTimeout(5000);
    
    await page.goto('https://www.demoblaze.com/index.html');
    console.log('this test7.......')
})

