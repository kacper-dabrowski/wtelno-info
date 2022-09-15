import React from 'react';
import Page from '../../src/components/Page';
import { withHeaders } from '../../src/hoc/withHeaders';
import { headersConfig } from '../../src/shared/headers/headers';

const MainPage = () => <Page pageName="wtelno" />;

export default withHeaders(MainPage, headersConfig.government.main);
