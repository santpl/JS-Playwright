exports.HomePage = 
class HomePage {
    constructor(page)
    {
        this.page = page;
        this.productList = '.hrefch';
        this.addToCart = "//a[normalize-space()='Add to cart']";
        this.cartLink = '#cartur';
    }

    async addProductToCart(productName)
    {
        const totalProducts = await this.page.$$(this.productList);
        for(const product of totalProducts)
        {
            let productText = await product.textContent();
            if(productName == productText)
            {
                await product.click();
                break;
            }
        }

        await this.page.locator(this.addToCart).click();
    }

    async gotoCartPage()
    {
        await this.page.locator(this.cartLink).click();
    }
}