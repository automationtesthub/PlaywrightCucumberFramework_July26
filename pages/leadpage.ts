
export class LeadPage
{
    page: any;
    constructor(page: any) 
    {
       this.page = page;
    }

    loc_tb_lastname:string = "//input[@name='lastname']";
    loc_tb_company:string = "//input[@name='company']";
    loc_btn_save:string = "(//input[@name='button'])[1]";
    loc_label_leadinfo:string = "//th[text()='Lead Information']";



    async verifyLeadCreation()
    {
       return await this.page.locator(this.loc_label_leadinfo).isVisible();
    }

   async Create_Lead(username: string, password: string)
    {
      await this.setLastName(username);
      await this.setCompany(password);
      await this.clickSaveButton();
    }

    async setLastName(lastname: string)
    {
       await this.page.locator(this.loc_tb_lastname).fill(lastname);
    }

    async setCompany(company: string)
    {
       await this.page.locator(this.loc_tb_company).fill(company);
    }

   

    async clickSaveButton()
    {
       await this.page.locator(this.loc_btn_save).click();
    }

   





}