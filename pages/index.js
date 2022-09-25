import React from 'react';
import { Page } from '../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../src/content/content';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { headersConfig } from '../src/shared/headers/headers';

const MainPage = ({ currentPage }) => {
    return <Page currentPage={currentPage} />;
};

export const getStaticProps = defaultPageGetStaticPropsFactory('wtelno');

export default withPageTitle(MainPage, headersConfig.government.main);
