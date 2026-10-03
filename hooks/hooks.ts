import {Before,After} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

import { chromium } from "playwright";

import { ExcelReader } from '../utils/ExcelReader';


Before(async function (this: CustomWorld, scenario) {

    // Get scenario name
    this.scenarioName = scenario.pickle.name;

    console.log(
        `\nExecuting Scenario: ${this.scenarioName}`
    );

    // Read Excel
    const reader = new ExcelReader();
    const testdata = reader.getTestData(this.scenarioName);
 // VERY IMPORTANT
    this.dt = testdata;

    console.log(
        "this.dt:",
        this.dt
    );


    const browser = await chromium.launch({
        channel: "chrome",
        headless: false
    });
    const context = await browser.newContext();

    this.page = await context.newPage();

    this.initializePageObjects();
   
});

After(async function (this: CustomWorld) {
    await this.page.close();
});