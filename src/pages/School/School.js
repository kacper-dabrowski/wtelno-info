import React from 'react';
import { headersConfig } from '../../src/shared/headers/headers';
import { withHeaders } from '../../src/hoc/withHeaders';
import Page from '../../src/components/Page';

const school = () => <Page pageName="oswiata" />;

export default withHeaders(school, headersConfig.government.school);
