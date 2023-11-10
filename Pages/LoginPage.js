exports.LoginPage = 
class LoginPage {
    constructor(page)
    {
        this.page = page;
        this.loginLink = '#login2';
        this.userName = '#loginusername';
        this.password = '#loginpassword';
        this.loginClick = "//button[normalize-space()='Log in']";
    }

    async gotoLoginPage()
    {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async login(username, pwd)
    {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.password).fill(pwd);
        await this.page.locator(this.loginClick).click();
    }
}