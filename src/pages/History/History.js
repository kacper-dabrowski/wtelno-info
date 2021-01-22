import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ClipLoader } from 'react-spinners';
import websources from '../../shared/websources';
import markdownConfig from '../../shared/markdownConfig';
import { fetchStrapiContent } from '../../shared/utils/strapiConent';

import { Container, MainHeader } from '../../components/UniversalStyles/ArticleStyles';
import HistoryCard from '../../components/Card/HistoryCard';

const History = () => {
    const [pageData, setPageData] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetchStrapiContent('history', setPageData, setHasError);
    }, []);

    if (hasError) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }

    if (!pageData) {
        return (
            <Container>
                <ClipLoader size="100px" />
            </Container>
        );
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
