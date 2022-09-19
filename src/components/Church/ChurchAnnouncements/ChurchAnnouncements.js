import React from 'react';
import ChurchAnnouncement from './ChurchAnnouncement';
import { Container, MainHeader } from '../../UniversalStyles/ArticleStyles/ArticleStyles';

export const ChurchAnnouncements = ({ articles }) => {
    const articlesList = articles.map(({ title, createdAt, id, content }) => (
        <ChurchAnnouncement key={id} title={title} createdAt={createdAt} id={id} content={content} />
    ));

    return (
        <Container>
            <MainHeader>Ogłoszenia parafialne</MainHeader>
            {articlesList}
        </Container>
    );
};
