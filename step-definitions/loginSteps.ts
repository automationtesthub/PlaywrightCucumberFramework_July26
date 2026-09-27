import {Given,When, Then} from "@cucumber/cucumber"
import { channel } from "node:diagnostics_channel";
import { chromium } from "playwright";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";

import { CustomWorld } from '../support/world';


let page:any;
let lp:LoginPage;
let hp:HomePage;

Given('user should be on login page',async function () {

    const browser = await chromium.launch({
        channel: "chrome",
        headless: false
    });
    const context = await browser.newContext();

    page = await context.newPage();

    await page.goto("http://localhost:100");
     lp = new LoginPage(page);
     hp = new HomePage(page);
    
  
});

When('user enters the valid credentials',async function (this: CustomWorld) {

    // await page.locator("//input[@name='user_name']").fill("admin");
    // await page.locator("//input[@name='user_password']").fill("admin");
    // await page.locator("//input[@name='Login']").click();

    await lp.login(this.dt.username,this.dt.password);
 
});

Then('user should be navigated to home page',async function () {
 
    //await expect( page.locator("//a[@class='currentTab'][text()='Home']")).toBeVisible();

    await expect(hp.verifyHome()).toBeTruthy();
    
});

Then('user can see the logout link',async function () {
 //await expect( page.locator("//a[text()='Logout']")).toBeVisible();
  await expect(hp.verifyLogout()).toBeTruthy();
});

When('user enters the invalid credentials',async  function (this: CustomWorld) {

    // await page.locator("//input[@name='user_name']").fill("admin123");
    // await page.locator("//input[@name='user_password']").fill("admin");
    // await page.locator("//input[@name='Login']").click();
     await lp.login(this.dt.username,this.dt.password);
  
});

Then('user should be navigated to login page',async function () {
 //await expect( page.locator("//input[@name='user_name']")).toBeVisible();
  await expect(lp.verifyUsername()).toBeTruthy();
});

Then('user can see the login error message',async function () {
  //await expect( page.locator("//*[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();

   await expect(lp.verifyErrorMessage()).toBeTruthy();
});

Then('close the browser',async function () {
  await page.close();
});

When('user enters the userid as {string} and password as {string} invalid credentials',async function (uid, pwd) {
//   await page.locator("//input[@name='user_name']").fill(uid);
//   await page.waitForTimeout(1000);
//     await page.locator("//input[@name='user_password']").fill(pwd);
//     await page.locator("//input[@name='Login']").click();

     await lp.login(uid,pwd);
});


When('user enter the lastname as {string} and company as {string} and click on save button',async function (string, string2, dataTable) {

   const data = dataTable.hashes();

    for (const row of data) {

        const lname = row.lastname;
        const comp = row.company;

        await page.locator("//a[text()='New Lead']").click();

        await page.locator("//input[@name='lastname']")
            .fill(lname);

        await page.locator("//input[@name='company']")
            .fill(comp);

        await page.locator("//input[@name='button']")
            .nth(0)
            .click();
    }


});