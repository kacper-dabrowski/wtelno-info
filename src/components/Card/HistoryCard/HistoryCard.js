import React from 'react';
import { MarkdownParser } from '../../../shared/markdownConfig';
import { Highlight, SecondaryHeader } from '../../UniversalStyles/ArticleStyles';
import { CardContainer, Centered, Name, PersonPhoto } from '../CardStyles';

const HistoryCard = ({ name, years, photo, description, title, additionalData }) => (
    <CardContainer>
        <SecondaryHeader>{title}</SecondaryHeader>
        <Name>{name}</Name>

        <Centered>
            {photo && <PersonPhoto photo={photo} />}
            <Highlight>{years}</Highlight>
            <MarkdownParser>{additionalData}</MarkdownParser>
            <MarkdownParser>{description}</MarkdownParser>
        </Centered>
    </CardContainer>
);

export default HistoryCard;
