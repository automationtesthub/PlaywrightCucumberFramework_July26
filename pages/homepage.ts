
export class HomePage
{
    page: any;
    constructor(page: any) 
    {
       this.page = page;
    }

    loc_tb_logout:string = "//a[text()='Logout']";
    loc_tb_home:string = "//a[text()='Home']";
    loc_tb_NewLead:string = "//a[text()='New Lead']";
   
  

    async clickLogout()
    {
       await   this.page.locator(this.loc_tb_logout).click();
    }

     async clickNewLead()
    {
       await   this.page.locator(this.loc_tb_NewLead).click();
    }

   

    async verifyLogout():Promise<boolean>
    {
       return await this.page.locator(this.loc_tb_logout).isVisible();
    }

     async verifyHome():Promise<boolean>
    {
       return await this.page.locator(this.loc_tb_home).isVisible();
    }






}