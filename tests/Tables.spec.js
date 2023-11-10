const {test, expect} = require('@playwright/test')

test('Handle Tables', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const column = await table.locator('thead tr th')
    console.log("Number of column: ", await column.count())
    expect(await column.count()).toBe(4)

    //Rows count
    const rows = await table.locator('tbody tr')
    console.log("Number of rows: ", await rows.count())
    expect(await rows.count()).toBe(5)

    //2. Select particular product from table
    /* const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: "Product 4"
    })

    await matchedRow.locator('input').check()
    */
   // Select mutiple product from table
   //await selectProduct(rows, page, 'Product 1');
   //await selectProduct(rows, page, 'Product 5');

    //To print all the data in a table
    /*for(let i=0; i < await rows.count(); i++)
    {
       const row =  rows.nth(i);
       const tds = row.locator('td');

       for(let j=0; j< await tds.count(); j++)
       {
            console.log(await tds.nth(j).textContent())
       }
    }

    await page.waitForTimeout(3000)
})
*/
    // 4. To capture all data from all the pages
    const pages = await page.locator('.pagination li a')
    console.log("Number of pages in the table: ", await pages.count())
    for(let p=0; p<await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        for(let i=0; i < await rows.count(); i++)
        {
            const row =  rows.nth(i);
            const tds = row.locator('td');

            for(let j=0; j< await tds.count(); j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000)
    }
})

async function selectProduct(rows, page, name)
{
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
}