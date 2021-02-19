import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ClipLoader } from 'react-spinners';
import websources from '../../shared/websources';
import markdownConfig from '../../shared/markdownConfig';

import { Container, MainHeader } from '../../components/UniversalStyles/ArticleStyles';
import HistoryCard from '../../components/Card/HistoryCard';
import useRequest from '../../shared/hooks/useRequest';

const History = () => {
    const [response, loading, error] = useRequest(`${websources.STRAPI_CMS_URL}/history`);

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
                <ClipLoader size="100px" />
            </Container>
        );
    }

    if (!pageData) {
        return <Container />;
    }

    const peopleCards =
        pageData.character.length > 0
            ? pageData.character.map((char) => {
                  return (
                      <HistoryCard
                          key={char._id}
                          name={char?.name}
                          years={char?.lifeYears}
                          photo={char?.photo?.url ? `${websources.STRAPI_CMS_URL}${char.photo.url}` : null}
                          additionalData={char?.additionalInfo}
                          description={char?.description}
                      />
                  );
              })
            : null;

    return (
        <Container>
            <MainHeader>Historia</MainHeader>
            <ReactMarkdown {...markdownConfig} source={pageData.historia} />
            {peopleCards}
        </Container>
    );
};

export default History;
