import{test,expect} from '@playwright/test';

test.beforeEach (async()=>{
    console.log('before start')
})

test.beforeAll (async()=>{
    console.log('berofre 1')
})

test.afterEach (async()=>{
    console.log("after each test")
})

test.afterEach (async()=>{
    console.log("after all test1")
})

test.describe('group',async()=>{

test('test1',async()=>{
    console.log("test1..")
})

test('test2',async()=>{
    console.log("test2..")
})





})