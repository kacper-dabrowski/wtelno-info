import axios from 'axios';

const httpConfig = {
    headers: { 'Content-Type': 'application/json' },
};

export interface HttpClient {
    get<T>(url: string): Promise<T>;
    getAll(urls: string[]): Promise<unknown[]>;
}

class DefaultHttpClient implements HttpClient {
    constructor(private http: typeof axios) {}

    async get<T>(url: string): Promise<T> {
        const { data } = await this.http.get<T>(url, httpConfig);

        return data;
    }

    async getAll(urls: string[]): Promise<unknown[]> {
        const promises = urls.map((url) => this.get(url));

        return Promise.all(promises);
    }
}

let http: HttpClient;

export const getHttpClient = (): HttpClient => {
    if (!http) {
        http = new DefaultHttpClient(axios);
    }

    return http;
};
