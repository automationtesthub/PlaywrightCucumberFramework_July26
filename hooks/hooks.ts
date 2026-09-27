import {Before,After} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

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
   
});