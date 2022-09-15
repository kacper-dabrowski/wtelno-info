import React from 'react';
import ReactMarkdown from 'react-markdown';
import { markdownConfig } from '../../../shared/markdownConfig';
import { PostHeader, PostContainer, PostDate, NewsLink } from './StyledFullPost';
import { formatDate } from '../../../shared/utils/date/date';

const fullPost = ({ title, content, date }) => {
    return (
        <PostContainer>
            <PostHeader>{title}</PostHeader>
            <NewsLink to="/aktualnosci">Powrót do aktualności</NewsLink>
            <PostDate>{formatDate(date)}</PostDate>
            <ReactMarkdown {...markdownConfig} source={content} />
        </PostContainer>
    );
};
export default fullPost;
