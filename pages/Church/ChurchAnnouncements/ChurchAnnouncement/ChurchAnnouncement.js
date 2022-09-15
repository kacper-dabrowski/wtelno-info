import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownConfig from '../../../../shared/markdownConfig';
import { formatDate } from '../../../../shared/utils/date/date';
import { AnnouncementContainer, AnnouncementDate } from '../StyledChurchAnnouncements';
import { SecondaryHeader } from '../../../../components/UniversalStyles/ArticleStyles';

const ChurchAnnouncement = ({ article }) => (
    <AnnouncementContainer>
        <SecondaryHeader>{article.title}</SecondaryHeader>
        <AnnouncementDate>{formatDate(article.date)}</AnnouncementDate>
        <ReactMarkdown {...markdownConfig} source={article.content} />
    </AnnouncementContainer>
);
export default ChurchAnnouncement;
