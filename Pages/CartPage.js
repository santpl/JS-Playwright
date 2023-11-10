exports.CartPage = 
class CartPage {
    constructor(page)
    {
        this.page = page;
        this.addedProducts = "//div[@class='table-responsive']/table//tbody/tr//td[2]";
    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.addedProducts)
        for(const product of productsInCart)
        {
            let productText = await product.textContent();
            if(productName == productText)
            {
                return true;
                break;
            }
        }
    }
}