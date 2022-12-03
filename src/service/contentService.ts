import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

interface ContentService {
    getMarkdown(): Promise<string>;
    getPostsData(): Promise<PostsData>;
}

interface PostsData {
    title: string;
    date: string;
}

export class PostsService implements ContentService {
    private content: string;

    private postsData: PostsData;

    constructor(private fileName: string) {}

    async getMarkdown(): Promise<string> {
        if (!this.content) {
            const { content } = await this.readPostFromFile();

            this.content = content;
        }

        return this.content;
    }

    async getPostsData(): Promise<PostsData> {
        if (!this.postsData) {
            const { data } = await this.readPostFromFile();

            this.postsData = data;
        }
        return this.postsData;
    }

    private async readPostFromFile(): Promise<{ content: string; data: PostsData }> {
        const fileBuffer = await fs.readFile(path.join('posts', this.fileName));

        const { content, data } = matter(fileBuffer);

        assertsValidPostsData(data);

        return { content, data };
    }
}

function assertsValidPostsData(data: any): asserts data is PostsData {
    return data.title && data.date;
}
