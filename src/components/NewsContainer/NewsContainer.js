import React from 'react';

import { StyledNewsContainer } from './NewsContainerStyles';
import { MainHeader } from '../UniversalStyles/ArticleStyles';
import NewsThumbnail from './NewsThumbnail';

const NewsContainer = ({ posts }) => {
    const postsTiles = posts.map((post) => (
        <NewsThumbnail
            key={post.createdAt}
            title={post.title}
            content={post.content}
            id={post.id}
            date={post.createdAt}
        />
    ));
    return (
        <>
            <MainHeader>Aktualności</MainHeader>
            <StyledNewsContainer>{postsTiles}</StyledNewsContainer>
        </>
    );
};

export default NewsContainer;
