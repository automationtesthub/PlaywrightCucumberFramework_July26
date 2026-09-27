import {setWorldConstructor,World} from '@cucumber/cucumber';

export class CustomWorld extends World {

    scenarioName!: string;

    dt!: Record<string, any>;

  
}

setWorldConstructor(CustomWorld);