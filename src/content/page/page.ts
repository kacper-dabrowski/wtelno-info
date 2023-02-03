import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { assertValidDate } from '../../shared/utils/date/date';
import { ContentService, PageData } from '../contentService';

export class PageContentService implements ContentService<PageData> {
    private pageData: PageData;

    constructor(private fileName: string) {}

    async getContent(): Promise<PageData> {
        if (!this.pageData) {
            const data = await this.readPostFromFile();

            this.pageData = data;
        }

        return this.pageData;
    }

    private async readPostFromFile(): Promise<PageData> {
        const fileBuffer = await fs.readFile(path.join('content', this.fileName));

        const { content, data } = matter(fileBuffer);
        const { date } = data;

        const createdAtDate = new Date(date);

        assertValidDate(createdAtDate);

        return { content, createdAt: createdAtDate.toString() };
    }
}
