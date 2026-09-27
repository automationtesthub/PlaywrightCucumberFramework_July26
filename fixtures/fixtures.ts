import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    homePage: async ({ page }, use) => {

        const homePage = new HomePage(page);

        await use(homePage);
    }
});

export { expect };