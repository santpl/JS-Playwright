const { test, expect } = require("@playwright/test")

test('Test1@sanity', async({page}) => {
    console.log("Executing test1...")
})

test('Test2@sanity', async({page}) => {
    console.log("Executing test2...")
})

test('Test3@reg', async({page}) => {
    console.log("Executing test3...")
})

test('Test1@reg', async({page}) => {
    console.log("Executing test4...")
})

test('Test1@sanity@reg', async({page}) => {
    console.log("Executing test5...")
})
