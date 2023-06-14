import React from 'react';
import Page from '../../components/Page';
import { headersConfig } from '../../shared/headers/headers';
import { withHeaders } from '../../hoc/withHeaders';

const school = () => <Page pageName="oswiata" />;

export default withHeaders(school, headersConfig.government.school);
