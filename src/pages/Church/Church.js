import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChurchAnnouncements from './ChurchAnnouncements';
import ChurchInfo from './ChurchInfo';
import Gallery from '../../components/Gallery';
import paths from '../../shared/paths';
import websources from '../../shared/websources';
import ChurchTerms from './ChurchTerms/ChurchTerms';
import { withHeaders } from '../../hoc/withHeaders';
import { headersConfig } from '../../shared/headers/headers';

const ChurchGallery = withHeaders(
    () => (
        <Gallery
            baseUrl={paths.church.churchGallery}
            fetchUrl={`${websources.STRAPI_CMS_URL}/church-albums`}
            mediaUrl={websources.STRAPI_CMS_URL}
        />
    ),
    headersConfig.church.churchGallery
);

const Church = () => {
    return (
        <Switch>
            <Route path={paths.church.churchInfo} exact>
                <ChurchInfo />
            </Route>
            <Route path={paths.church.churchAnnouncements} exact>
                <ChurchAnnouncements />
            </Route>
            <Route path={paths.church.churchTerms} exact>
                <ChurchTerms />
            </Route>
            <Route path={paths.church.churchGallery}>
                <ChurchGallery />
            </Route>
        </Switch>
    );
};

export default Church;
