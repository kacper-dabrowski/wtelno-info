import React from 'react';
import websources from '../../shared/websources';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import HistoryCard from '../Card/HistoryCard';
import { MarkdownParser } from '../../shared/markdownConfig';

export const History = ({ pageData }) => {
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
            <MarkdownParser>{pageData.historia}</MarkdownParser>
            {peopleCards}
        </Container>
    );
};
