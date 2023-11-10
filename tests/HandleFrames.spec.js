const {test, expect} = require('@playwright/test')

test('Handle frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Approach 1: using name or url

    //const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    //await frame1.fill("[name='mytext1']", "Hello")

    /*
    const frames = await page.frame('name')
    await frames.fill('locator','value')
    */

    //Approach 2: using frameLocator
    const frameBox = page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await frameBox.fill('Heyy')
    await page.waitForTimeout(5000)
})