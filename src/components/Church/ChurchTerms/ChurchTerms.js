import React from 'react';
import Page from '../../../src/components/Page';
import { withHeaders } from '../../../src/hoc/withHeaders';
import { headersConfig } from '../../../src/shared/headers/headers';

const ChurchTerms = () => <Page pageName="regulamin-cmentarza" />;

export default withHeaders(ChurchTerms, headersConfig.church.churchTerms);
