import {test, expect} from '@playwright/test'

/*test('Test1 ', async({page, browserName}) => {
    console.log("Test 1...")
    if(browserName == 'chromium')
    {
        test.skip()
    }
})

test('Test2 ', async({page}) => {
    test.fixme()
    console.log("This is test2..")
})


test('Test3 ', async({page, browserName}) => {
    test.fail();
    console.log("Test3..")
    expect(1).toBe(3)
})
*/

test('Test 4', async({page, browserName}) => {
    console.log("Test 4..")
    if(browserName=='chromium')
    {
        test.fail();
    }
})