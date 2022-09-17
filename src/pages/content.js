import axios from 'axios';
import websources from '../shared/websources';

export const fetchDefaultPagesContent = async (pageName) => {
    const result = await axios.get(`${websources.STRAPI_CMS_URL}/pages`, {
        headers: { 'Content-Type': 'application/json' },
    });

    result.data.forEach((page) => {
        console.log(page.title, page.name);
    });

    const pageContent = result.data.find((page) => page.name === pageName);

    if (!pageContent) {
        return { notFound: true };
    }

    const { title, content } = pageContent;

    return { title, content };
};
