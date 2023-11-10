const{test, expect} = require('@playwright/test')

test('Drag and drop', async({page}) => {
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = await page.locator('#box6')
    const italy = await page.locator('box106')

    /*await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
    */
    await rome.dragTo(italy)

    await page.waitForTimeout(5000)
})