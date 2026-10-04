import { Page } from '@playwright/test';

import { LoginPage } from './loginpage';
import { HomePage } from './homepage';
import { LeadPage } from './leadpage';

export class PageObjectManager {

    private readonly page: Page;

    private lp?: LoginPage;
    private hp?: HomePage;
    private ldp?: LeadPage;

    constructor(page: Page) {

        this.page = page;
    }

    getLoginPage(): LoginPage {

        if (!this.lp) {
            this.lp = new LoginPage(this.page);
        }

        return this.lp;
    }

    getHomePage(): HomePage {

        if (!this.hp) {
            this.hp = new HomePage(this.page);
        }

        return this.hp;
    }

    getLeadPage(): LeadPage {

        if (!this.ldp) {
            this.ldp = new LeadPage(this.page);
        }

        return this.ldp;
    }
}