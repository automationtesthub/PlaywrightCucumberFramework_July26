
export class LoginPage
{
    page: any;
    constructor(page: any) 
    {
       this.page = page;
    }

    loc_tb_userid:string = "//input[@name='user_name']";
    loc_tb_password:string = "//input[@name='user_password']";
    loc_btn_login:string = "//input[@name='Login']";
    loc_err_msg:string = "//*[contains(text(),'You must specify a valid username and password.')]";
    loc_img_logo:string = "//img[@src='include/images/vtiger-crm.gif']";

   async login(username: string, password: string)
    {
      await this.setUserName(username);
      await this.setPassword(password);
      await this.clickLoginButton();
      await this.page.waitForTimeout(2000);
    }

    async setUserName(username: string)
    {
       await this.page.locator(this.loc_tb_userid).fill(username);
    }

    async setPassword(password: string)
    {
       await this.page.locator(this.loc_tb_password).fill(password);
    }

    async clickLoginButton()
    {
       await this.page.locator(this.loc_btn_login).click();
    }

    async verifyErrorMessage():Promise<boolean>
    {
       return await this.page.locator(this.loc_err_msg).isVisible({ timeout: 10000 });
    }

    async verifyLogo():Promise<boolean>
    {
       return await this.page.locator(this.loc_img_logo).isVisible({ timeout: 10000 });
    }

    async verifyUsername(): Promise<boolean>
    {
       return await this.page.locator(this.loc_tb_userid).isVisible({ timeout: 10000 });
    }






}