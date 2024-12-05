const{test,expect} = require('@playwright/test');
test.only("get user",async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test ("post user",async({request})=>{
    
})

test ("put user",async({request})=>{
    
})

test ("delete",async({request})=>{
    
})