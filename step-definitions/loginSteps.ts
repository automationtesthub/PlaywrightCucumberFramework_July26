import {Given,When, Then} from "@cucumber/cucumber"

import { expect } from "@playwright/test";


import { CustomWorld } from '../support/world';





Given('user should be on login page',async function (this: CustomWorld) {

    

    await this.page.goto("http://localhost:100");
    
    
  
});

When('user enters the valid credentials',async function (this: CustomWorld) {

       await this.pom.getLoginPage().login(this.dt.username,this.dt.password);
 
});

Then('user should be navigated to home page',async function () {
 
    //await expect( page.locator("//a[@class='currentTab'][text()='Home']")).toBeVisible();

    await expect(this.pom.getHomePage().verifyHome()).toBeTruthy();
    
});

Then('user can see the logout link',async function () {
 //await expect( page.locator("//a[text()='Logout']")).toBeVisible();
  await expect(this.pom.getHomePage().verifyLogout()).toBeTruthy();
});

When('user enters the invalid credentials',async  function (this: CustomWorld) {

    // await page.locator("//input[@name='user_name']").fill("admin123");
    // await page.locator("//input[@name='user_password']").fill("admin");
    // await page.locator("//input[@name='Login']").click();
     await this.pom.getLoginPage().login(this.dt.username,this.dt.password);
  
});

Then('user should be navigated to login page',async function () {
 //await expect( page.locator("//input[@name='user_name']")).toBeVisible();
  await expect(this.pom.getLoginPage().verifyUsername()).toBeTruthy();
});

Then('user can see the login error message',async function () {
  //await expect( page.locator("//*[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();

   await expect(this.pom.getLoginPage().verifyErrorMessage()).toBeTruthy();
});



When('user enters the userid as {string} and password as {string} invalid credentials',async function (uid, pwd) {
//   await page.locator("//input[@name='user_name']").fill(uid);
//   await page.waitForTimeout(1000);
//     await page.locator("//input[@name='user_password']").fill(pwd);
//     await page.locator("//input[@name='Login']").click();

     await this.pom.getLoginPage().login(uid,pwd);
});


