import {setWorldConstructor,World} from '@cucumber/cucumber';
import { PageObjectManager } from '../pages/PageObjectManager';

export class CustomWorld extends World {

    scenarioName!: string;

    dt!: Record<string, any>;  

    page!: any;

     pom!: PageObjectManager;


    initializePageObjects(): void {

        this.pom = new PageObjectManager(this.page);
    }

}

setWorldConstructor(CustomWorld);