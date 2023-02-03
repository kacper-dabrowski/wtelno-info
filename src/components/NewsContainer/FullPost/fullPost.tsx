import Link from 'next/link';
import React, { FC } from 'react';
import { MarkdownParser } from '../../../shared/markdownConfig';
import { formatDate } from '../../../shared/utils/date/date';
import { NewsLink, PostContainer, PostDate, PostHeader } from './StyledFullPost';

interface FullPostProps {
    title: string;
    content: string;
    createdAt: string;
}

export const FullPost: FC<FullPostProps> = ({ title, content, createdAt }) => {
    return (
        <PostContainer>
            <PostHeader>{title}</PostHeader>
            <Link href="/aktualnosci">
                <NewsLink>Powrót do aktualności</NewsLink>
            </Link>
            <PostDate>{formatDate(createdAt)}</PostDate>
            <MarkdownParser>{content}</MarkdownParser>
        </PostContainer>
    );
};
