import {test, expect} from '@playwright/test'

test.skip('Alert handle', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box')
        await dialog.accept()
    })

    await page.click("//button[contains(text(),'Alert')]")
    await page.waitForTimeout(5000)
})

test.skip('Alert handle with OK and Cancel', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
        // await dialog.dismiss()
    })

    await page.click("//button[contains(text(),'Confirm Box')]")
    await expect(page.locator('p#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)
})

test('prompt handle', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Santhosh')
        // await dialog.dismiss()
    })

    await page.click("//button[contains(text(),'Prompt')]")
    await expect(page.locator('p#demo')).toHaveText('Hello Santhosh! How are you today?')
    await page.waitForTimeout(5000)
})