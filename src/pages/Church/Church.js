import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChurchAnnouncements from './ChurchAnnouncements';
import ChurchInfo from './ChurchInfo';
import Gallery from '../../components/Gallery';
import paths from '../../shared/paths';
import websources from '../../shared/websources';

const church = () => {
    return (
        <Switch>
            <Route path={paths.church.churchInfo} exact>
                <ChurchInfo />
            </Route>
            <Route path={paths.church.churchAnnouncements} exact>
                <ChurchAnnouncements />
            </Route>
            <Route path={paths.church.churchGallery}>
                <Gallery
                    baseUrl={paths.church.churchGallery}
                    fetchUrl={`${websources.STRAPI_CMS_URL}/church-albums`}
                    mediaUrl={websources.STRAPI_CMS_URL}
                />
            </Route>
        </Switch>
    );
};

export default church;
