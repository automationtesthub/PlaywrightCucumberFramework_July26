import {Given,When, Then} from "@cucumber/cucumber"
import { CustomWorld } from '../support/world';






When('user enter the lastname as {string} and company as {string} and click on save button',async function (this: CustomWorld,string, string2, dataTable) {

   const data = dataTable.hashes();

    for (const row of data) {

        const lname = row.lastname;
        const comp = row.company;

        await this.page.locator("//a[text()='New Lead']").click();

        await this.page.locator("//input[@name='lastname']")
            .fill(lname);

        await this.page.locator("//input[@name='company']")
            .fill(comp);

        await this.page.locator("//input[@name='button']")
            .nth(0)
            .click();   }


});


When('user click on new lead link', async function () {
  
  await this.pom.getHomePage().clickNewLead();
});

When('enter lastname and company name and click on save button', async function () {
  await this.pom.getLeadPage().Create_Lead(this.dt.lastname,this.dt.company);
});

Then('lead should be created successfully', async function () {
   
  await this.pom.getLeadPage().verifyLeadCreation();
});

    

    