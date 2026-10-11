
import * as fs from "node:fs";
import * as path from "node:path";
import * as XLSX from "xlsx";

export class ExcelReader {

    private data: Record<string, any>[] = [];

    constructor(excelFilePath?: string) {
       const sheetName: string = "Sheet1";
       const candidatePaths = [
            excelFilePath ? path.resolve(excelFilePath) : "",
            path.resolve(process.cwd(), "data", "testdata.xlsx"),
            path.resolve(__dirname, "..", "data", "testdata.xlsx")
       ].filter(Boolean) as string[];

       const resolvedPath = candidatePaths.find(filePath => fs.existsSync(filePath));

       if (!resolvedPath) {
            throw new Error(
                `Excel file not found. Checked: ${candidatePaths.join(", ")}`
            );
       }

        // Read Excel file
        const workbook = XLSX.readFile(resolvedPath);

        // Get worksheet
        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(
                `Sheet '${sheetName}' not found in Excel file: ${resolvedPath}`
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

