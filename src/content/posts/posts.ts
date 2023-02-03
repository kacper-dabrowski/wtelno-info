import { isValid } from 'date-fns';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import slugify from 'slugify';
import { ContentService, PageData } from '../contentService';

export class PostsContentService implements ContentService<PostData[]> {
    private postsData: PostData[];

    constructor(private dirName: string) {}

    async getPostByPath(title: string): Promise<PostData> {
        if (!this.postsData) {
            await this.getContent();
        }

        return this.postsData.find((news) => news.path === this.convertTitleToPathname(title));
    }

    async getContent(): Promise<PostData[]> {
        if (!this.postsData) {
            const filesWithPosts = await this.getPostsList();

            const postsData = filesWithPosts.map((fileName) => this.getContentFromFileInDirectory(fileName));

            this.postsData = await Promise.all(postsData);
        }

        return this.postsData;
    }

    private async getPostsList() {
        return fs.readdir(path.join('content', this.dirName));
    }

    private async getContentFromFileInDirectory(fileName: string): Promise<PostData> {
        const fileContent = await fs.readFile(path.join('content', this.dirName, fileName));

        const { data, content } = matter(fileContent.toString());
        const { photoUrl, date, title } = data;

        if (typeof photoUrl !== 'string' && typeof photoUrl !== undefined) {
            throw new Error(`unknown data passed when reading dirname: ${this.dirName}, filename ${fileName}`);
        }

        const createdAtDate = new Date(date);

        if (!isValid(createdAtDate)) {
            throw new Error(`invalid created at detected in: ${this.dirName}/${fileName}`);
        }

        return {
            photoUrl,
            createdAt: createdAtDate.toString(),
            content,
            path: this.convertTitleToPathname(title),
            title,
        };
    }

    private convertTitleToPathname(fileName: string): string {
        return slugify(fileName, { lower: true });
    }
}

interface PostData extends PageData {
    photoUrl?: string;
    path: string;
    title?: string;
}
