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


     this.browser = await chromium.launch({
        channel: 'chrome',
        headless: true
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    this.initializePageObjects();
   
});


After(async function (this: CustomWorld) {
    console.log("After hook: scenario finished");
    // Avoid closing the browser here because the page is still needed for the final assertions.
    // The browser is created per scenario in Before and is left alive for the full scenario lifecycle.
});