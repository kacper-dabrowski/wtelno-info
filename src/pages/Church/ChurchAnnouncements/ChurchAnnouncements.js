import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Container, MainHeader } from '../../../components/UniversalStyles/ArticleStyles';
import ChurchAnnouncement from './ChurchAnnouncement';
import useRequest from '../../../shared/hooks/useRequest';
import websources from '../../../shared/websources';
import { withHeaders } from '../../../hoc/withHeaders';
import { headersConfig } from '../../../shared/headers/headers';

const ChurchAnnouncements = () => {
    const [response, loading, error] = useRequest(`${websources.STRAPI_CMS_URL}/church-events`);
    const pageData = response?.data;

    if (error) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }
    if (loading) {
        return (
            <Container>
                <ClipLoader size="100px" />;
            </Container>
        );
    }

    if (!pageData) {
        return <Container />;
    }

    const articles = pageData.map((article) => <ChurchAnnouncement key={article.id} article={article} />).reverse();
    return (
        <Container>
            <MainHeader>Ogłoszenia parafialne</MainHeader>
            {articles}
        </Container>
    );
};

export default withHeaders(ChurchAnnouncements, headersConfig.church.churchAnnouncements);
