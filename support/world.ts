import {setWorldConstructor,World} from '@cucumber/cucumber';
import { PageObjectManager } from '../pages/PageObjectManager';
import { Browser, BrowserContext } from 'playwright';

export class CustomWorld extends World {

    scenarioName!: string;

    dt!: Record<string, any>;  

    page!: any;
    browser!: Browser;
    context!: BrowserContext;

     pom!: PageObjectManager;

   


    initializePageObjects(): void {

        this.pom = new PageObjectManager(this.page);
    }

}

setWorldConstructor(CustomWorld);