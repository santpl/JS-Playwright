const { test, expect } = require("@playwright/test")

test('Upload a files', async({page}) => {
    await page.goto("https://www.foundit.in/")

    await page.waitForSelector("[class='heroSection-buttonContainer_secondaryBtn__text']")
    await page.click("[class='heroSection-buttonContainer_secondaryBtn__text']")

    await page.locator("#file-upload").setInputFiles("tests/Uploadfiles/Santhosh K.docx")
    await page.waitForTimeout(5000)

    await page.close()
})

test.only('Multiple files upload', async({page}) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.waitForSelector("#filesToUpload")
    await page.locator("#filesToUpload").setInputFiles(["tests/Uploadfiles/Santhosh K.docx", "tests/Uploadfiles/myresume.docx"])

    await page.waitForTimeout(5000)

    //Remove the files
    await page.locator("#filesToUpload").setInputFiles([])
    await page.close()
})