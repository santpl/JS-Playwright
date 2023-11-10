import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test('Demoblaze login', async ({page}) => {
    //Login Page
    const demoblazeLogin = new LoginPage(page);
    await demoblazeLogin.gotoLoginPage();
    await demoblazeLogin.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    //Home page
    const demoblazeHome = new HomePage(page);
    await demoblazeHome.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await demoblazeHome.gotoCartPage()

    //Cart
    const demoblazeCart = new CartPage(page);
    await page.waitForTimeout(3000)
    await demoblazeCart.checkProductInCart("Nexus 6")
})