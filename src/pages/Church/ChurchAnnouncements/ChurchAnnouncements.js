import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Container, MainHeader } from '../../../components/UniversalStyles/ArticleStyles';
import ChurchAnnouncement from './ChurchAnnouncement';
import { fetchStrapiContent } from '../../../shared/utils/strapiConent';

const ChurchAnnouncements = () => {
    const [pageData, setPageData] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            const fetchPageData = async () => {
                const fetchedAnnouncements = await fetchStrapiContent('church-events');

                setPageData(fetchedAnnouncements.reverse());
            };

            fetchPageData();
        } catch (error) {
            setHasError(true);
        }
    }, []);

    if (hasError) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }
    let articles = <ClipLoader size="100px" />;
    if (pageData) {
        articles = pageData.map((article) => <ChurchAnnouncement key={article.id} article={article} />);
    }

    return (
        <Container>
            <MainHeader>Ogłoszenia parafialne</MainHeader>
            {articles}
        </Container>
    );
};

export default ChurchAnnouncements;
