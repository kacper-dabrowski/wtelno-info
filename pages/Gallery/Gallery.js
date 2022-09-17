import React from 'react';
import websources from '../../src/shared/websources';
import { paths } from '../../src/shared/paths';
import { withHeaders } from '../../src/hoc/withHeaders';
import { headersConfig } from '../../src/shared/headers/headers';

const gallery = () => (
    <Gallery
        baseUrl={paths.gallery}
        fetchUrl={`${websources.STRAPI_CMS_URL}/albums`}
        mediaUrl={websources.STRAPI_CMS_URL}
    />
);
export default withHeaders(gallery, headersConfig.gallery.main);
