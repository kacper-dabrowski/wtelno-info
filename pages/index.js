import React from 'react';
import { Page } from '../src/components/Page/Page';
import { fetchDefaultPagesContent } from '../src/pages/content';

const MainPage = ({ currentPage }) => {
    return <Page currentPage={currentPage} />;
};

export async function getStaticProps() {
    const { notFound, title, content } = await fetchDefaultPagesContent('wtelno');

    return {
        notFound,
        props: {
            currentPage: {
                title,
                content,
            },
        },
    };
}

export default MainPage;
