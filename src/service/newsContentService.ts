import { isValid } from 'date-fns';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { ContentService, PageData } from './contentService';

export class NewsContentService implements ContentService<PostData[]> {
    private postsData: PostData[];

    constructor(private dirName: string) {}

    async getPageData(): Promise<PostData[]> {
        if (!this.postsData) {
            const filesWithPosts = await fs.readdir(path.join('content/posts', this.dirName));

            const postsData = filesWithPosts.map((fileName) => this.getContentFromFileInDirectory(fileName));

            this.postsData = await Promise.all(postsData);
        }

        return this.postsData;
    }

    private async getContentFromFileInDirectory(fileName: string): Promise<PostData> {
        const fileContent = await fs.readFile(path.join('content/posts', this.dirName, fileName));

        const { data, content } = matter(fileContent.toString());
        const { photoUrl, createdAt } = data;

        if (typeof photoUrl !== 'string' && typeof photoUrl !== undefined) {
            throw new Error(`unknown data passed when reading dirname: ${this.dirName}, filename ${fileName}`);
        }

        const createdAtDate = new Date(createdAt);

        if (!isValid(createdAtDate)) {
            throw new Error(`invalid created at detected in: ${this.dirName}/${fileName}`);
        }

        return { photoUrl, createdAt: createdAtDate, content };
    }
}

interface PostData extends PageData {
    photoUrl?: string;
}
