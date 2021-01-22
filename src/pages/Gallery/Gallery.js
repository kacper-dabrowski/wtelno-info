import React from 'react';
import Gallery from '../../components/Gallery';
import paths from '../../shared/paths';
import websources from '../../shared/websources';

const gallery = () => (
    <Gallery
        baseUrl={paths.gallery}
        fetchUrl={`${websources.STRAPI_CMS_URL}/albums`}
        mediaUrl={websources.STRAPI_CMS_URL}
    />
);
export default gallery;
