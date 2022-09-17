import React from 'react';
import NewsContainer from '../../components/NewsContainer';

const News = ({ posts }) => {
    return <NewsContainer posts={posts} />;
};

export default News;
