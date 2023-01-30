export interface ContentService<T> {
    getPageData(): Promise<T>;
}

export interface PageData {
    createdAt: string;
    content: string;
}
