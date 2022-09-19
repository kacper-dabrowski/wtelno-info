import axios from 'axios';
import websources from '../shared/websources';

export const defaultPageGetStaticPropsFactory = (pageName) => {
    return async () => {
        const { notFound, title, content } = await fetchDefaultPagesContent(pageName);

        return {
            notFound,
            props: {
                currentPage: {
                    title,
                    content,
                },
            },
        };
    };
};

export const fetchNews = async () => {
    const result = await sendRequestForContent('events');

    return {
        props: {
            posts: result.map(({ title, content, createdAt, id }) => ({ title, content, createdAt, id })),
        },
    };
};

export const fetchChurchNews = async () => {
    const result = await sendRequestForContent('church-events');

    return {
        props: {
            posts: result.map(({ title, content, createdAt, id }) => ({ title, content, createdAt, id })),
        },
    };
};

export const fetchNewsById = async (postId) => {
    const result = await sendRequestForContent(`events/${postId}`);

    if (!result) {
        return { notFound: true };
    }

    const { title, content, createdAt } = result;

    return { props: { title, content, createdAt } };
};

export const getAlbumById = async (albumId) => {
    const result = await sendRequestForContent(`albums/${albumId}`);

    if (!result) {
        return { notFound: true };
    }

    const { title, media } = result;

    return { props: { album: { title, media }, baseUrl: websources.STRAPI_CMS_URL } };
};

export const getChurchAlbumById = async (albumId) => {
    const result = await sendRequestForContent(`church-albums/${albumId}`);

    if (!result) {
        return { notFound: true };
    }

    const { title, media } = result;

    return { props: { album: { title, media }, baseUrl: websources.STRAPI_CMS_URL } };
};

export const getNewsIds = async () => {
    const result = await sendRequestForContent('events');

    return result.map(({ id }) => id);
};

export const getAlbums = async () => {
    return sendRequestForContent('albums');
};

export const getChurchAlbums = async () => {
    return sendRequestForContent('church-albums');
};

export const getHistoryPageContent = async () => {
    const result = await sendRequestForContent('history');

    return { props: { pageData: result } };
};

const fetchDefaultPagesContent = async (pageName) => {
    const result = await sendRequestForContent('pages');

    const pageContent = result.find((page) => page.name === pageName);

    if (!pageContent) {
        return { notFound: true };
    }

    const { title, content } = pageContent;

    return { title, content };
};

async function sendRequestForContent(endpoint = '') {
    const result = await axios.get(`${websources.STRAPI_CMS_URL}/${endpoint}`, {
        headers: { 'Content-Type': 'application/json' },
    });

    return result.data;
}
