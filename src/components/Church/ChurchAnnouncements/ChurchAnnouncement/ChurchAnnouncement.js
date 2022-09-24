import React from 'react';
import { MarkdownParser } from '../../../../shared/markdownConfig';
import { formatDate } from '../../../../shared/utils/date/date';
import { SecondaryHeader } from '../../../UniversalStyles/ArticleStyles';
import { AnnouncementContainer, AnnouncementDate } from '../StyledChurchAnnouncements';

export const ChurchAnnouncement = ({ title, createdAt, content }) => (
    <AnnouncementContainer>
        <SecondaryHeader>{title}</SecondaryHeader>
        <AnnouncementDate>{formatDate(createdAt)}</AnnouncementDate>
        <MarkdownParser>{content}</MarkdownParser>
    </AnnouncementContainer>
);
