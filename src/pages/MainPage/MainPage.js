import React from 'react';
import Page from '../../components/Page';
import { withHeaders } from '../../hoc/withHeaders';
import { headersConfig } from '../../shared/headers/headers';

const MainPage = () => <Page pageName="wtelno" />;
export default withHeaders(MainPage, headersConfig.government.main);
