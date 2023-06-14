import React from 'react';
import { Page } from '../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../src/content/content';

const MainPage = ({ currentPage }) => {
    return <Page currentPage={currentPage} />;
};

export const getStaticProps = defaultPageGetStaticPropsFactory('wtelno');

export default MainPage;
