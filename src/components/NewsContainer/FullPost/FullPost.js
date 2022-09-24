import Link from 'next/link';
import React from 'react';
import { MarkdownParser } from '../../../shared/markdownConfig';
import { formatDate } from '../../../shared/utils/date/date';
import { NewsLink, PostContainer, PostDate, PostHeader } from './StyledFullPost';

const fullPost = ({ title, content, date }) => {
    return (
        <PostContainer>
            <PostHeader>{title}</PostHeader>
            <Link href="/aktualnosci">
                <NewsLink>Powrót do aktualności</NewsLink>
            </Link>
            <PostDate>{formatDate(date)}</PostDate>
            <MarkdownParser>{content}</MarkdownParser>
        </PostContainer>
    );
};
export default fullPost;
