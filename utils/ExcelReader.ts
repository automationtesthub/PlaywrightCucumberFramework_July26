
import * as XLSX from "xlsx";

export class ExcelReader {

    private data: Record<string, any>[] = [];

    constructor() {
       let sheetName: string = "Sheet1";
        // Read Excel file
        const workbook = XLSX.readFile("C:\\Course\\Playwright_typescript\\PlaywrightJuly2026\\PlaywrightCucumberFramework_July26\\data\\testdata.xlsx");

        // Get worksheet
        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(
                `Sheet '${sheetName}' not found in Excel file`
            );
        }

        // Convert Excel sheet into JSON
        this.data = XLSX.utils.sheet_to_json<Record<string, any>>(
            worksheet,
            {
                defval: ""
            }
        );
    }

    /**
     * Get all Excel data
     */
    getAllData(): Record<string, any>[] {
        return this.data;
    }

    /**
     * Get data for a specific TestCase
     */
    getTestData(testCase: string): Record<string, any> {

        const row = this.data.find(
            data => data.TestCase === testCase
        );

        if (!row) {
            throw new Error(
                `Test case '${testCase}' not found in Excel`
            );
        }

        return row;
    }

    /**
     * Get value of a specific column
     */
    getValue(testCase: string, columnName: string): any {

        const row = this.getTestData(testCase);

        return row[columnName];
    }
}

