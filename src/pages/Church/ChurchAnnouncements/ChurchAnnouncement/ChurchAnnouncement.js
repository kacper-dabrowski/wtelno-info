import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownConfig from '../../../../shared/markdownConfig';
import { formatDate } from '../../../../shared/utils/date/date';
import { AnnouncementContainer, AnnouncementDate } from '../StyledChurchAnnouncements';
import { SecondaryHeader } from '../../../../components/UniversalStyles/ArticleStyles';

export const ChurchAnnouncement = ({ title, createdAt, content }) => (
    <AnnouncementContainer>
        <SecondaryHeader>{title}</SecondaryHeader>
        <AnnouncementDate>{formatDate(createdAt)}</AnnouncementDate>
        <ReactMarkdown {...markdownConfig}>{content}</ReactMarkdown>
    </AnnouncementContainer>
);
