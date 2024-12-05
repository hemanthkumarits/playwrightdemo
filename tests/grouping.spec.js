import{test,expect} from '@playwright/test';


test.beforeAll(async()=>{
    console.log('this is before all hook')
})

test.afterAll(async()=>{
    console.log("this is after all")
})

test.beforeEach(async ()=>{
    console.log("this before each")
})

test.afterEach(async ()=>{
    console.log("this after each")
})

test.describe('group1',()=>{
    test('test1',async({page})=>{
        console.log('test1....')
    })
    
    test('test2',async({page})=>{
        console.log('test2....')
    })

})

test.describe.only('group1',()=>{
    test('test3',async({page})=>{
        console.log('test3....')
    })
    
    test('test4',async({page})=>{
        console.log('test4....')
    })

})
