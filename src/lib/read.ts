import { promises as fs } from 'fs';

type JsonData = {
    data: any;
};

export async function readJsonDataAsync(filePath: string): Promise<any> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const res: JsonData = JSON.parse(fileContent);
        return res.data;
    } catch (error) {
        console.error('Error reading or parsing file:', error);
        throw error; // Rethrow or handle as needed
    }
}