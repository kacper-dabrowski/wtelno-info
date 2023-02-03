export interface ContentService<T> {
    getContent(): Promise<T>;
}

export interface PageData {
    createdAt: string;
    content: string;
}
