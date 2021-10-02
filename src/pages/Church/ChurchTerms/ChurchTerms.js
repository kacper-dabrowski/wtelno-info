import React from 'react';
import Page from '../../../components/Page/Page';
import { withHeaders } from '../../../hoc/withHeaders';
import { headersConfig } from '../../../shared/headers/headers';

const ChurchTerms = () => <Page pageName="regulamin-cmentarza" />;

export default withHeaders(ChurchTerms, headersConfig.church.churchTerms);
