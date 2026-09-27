
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export class CSVReader {

    private data: Record<string, string>[] = [];

    constructor(fileName: string) {

        const filePath = path.join(
            process.cwd(),
            "data",
            fileName
        );

        if (!fs.existsSync(filePath)) {
            throw new Error(
                `CSV file not found: ${filePath}`
            );
        }

        const csvData = fs.readFileSync(
            filePath,
            "utf-8"
        );

        this.data = parse(csvData, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
            relax_column_count: true
        });
    }

    /**
     * Get all CSV records
     */
    getAllData(): Record<string, string>[] {
        return this.data;
    }

    /**
     * Get data for a specific test case
     */
    getTestData(
        testCase: string
    ): Record<string, string> {

        const row = this.data.find(
            data => data.TestCase === testCase
        );

        if (!row) {
            throw new Error(
                `Test case '${testCase}' not found in CSV`
            );
        }

        return row;
    }

    /**
     * Get a specific column value
     */
    getValue(
        testCase: string,
        columnName: string
    ): string {

        const row = this.getTestData(testCase);

        return row[columnName] ?? "";
    }
}

