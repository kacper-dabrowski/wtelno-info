import axios from 'axios';
import { getHttpClient, HttpClient } from '../shared/http';
import websources from '../shared/websources';
import { PageDto, PagesDto } from './page/dto';

class PageService {
    private pages: PagesDto = null;

    constructor(private http: HttpClient) {}

    async getPage(pageName: string) {
        const pageContent = await this.getPageContent(pageName);

        if (!pageContent) {
            return { notFound: true };
        }

        const { title, content } = pageContent;

        return { title, content };
    }

    private async getPageContent(pageName: string): Promise<PageDto | undefined> {
        if (!this.pages) {
            await this.fetchPages();
        }

        return this.pages.find((page) => page.name === pageName);
    }

    private async fetchPages(): Promise<void> {
        const result = await this.http.get<PagesDto>(`${websources.STRAPI_CMS_URL}/pages`);

        this.pages = result;
    }
}

let pageService: PageService;

export const getPageService = (): PageService => {
    if (!pageService) {
        pageService = new PageService(getHttpClient());
    }

    return pageService;
};
