import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CardContainer, Centered, Name, PersonPhoto } from '../CardStyles';
import { Highlight, SecondaryHeader } from '../../UniversalStyles/ArticleStyles';
import markdownConfig from '../../../shared/markdownConfig';

const HistoryCard = ({ name, years, photo, description, title, additionalData }) => {
    return (
        <CardContainer>
            <SecondaryHeader>{title}</SecondaryHeader>
            <Name>{name}</Name>

            <Centered>
                {photo && <PersonPhoto photo={photo} />}
                <Highlight>{years}</Highlight>
                <ReactMarkdown {...markdownConfig} source={additionalData} />
                <ReactMarkdown {...markdownConfig} source={description} />
            </Centered>
        </CardContainer>
    );
};
export default HistoryCard;
