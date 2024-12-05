
exports.Sign = class Sign{

    constructor(page){
        this.page = page;
        this.signIn = "#signIn";
            this.emailId =" name='userLoginId'";
            this.passwordInput = "name='password'";
            this.signInButton = "//*[@id='appMountPoint']/div/div/div[2]/div/form/button[1]";
    }
    async gotoSign(){
        await this.page.goto('https://www.netflix.com/login');
    }
    async sign(email,password){
        await this.page.locator(this.signIn).click();
        await this.page.locator(this.emailId).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.signInButton).click();
    }
    
    
    
    }