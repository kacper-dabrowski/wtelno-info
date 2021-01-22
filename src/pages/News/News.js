import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';
import { MainHeader, Container } from '../../components/UniversalStyles/ArticleStyles';
import NewsContainer from '../../components/NewsContainer';
import FullPost from '../../components/NewsContainer/FullPost';
import { fetchStrapiContent } from '../../shared/utils/strapiConent';

const News = () => {
    const [pageData, setPageData] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const fetchedNews = await fetchStrapiContent('events');

                setPageData(fetchedNews.reverse());
            } catch (error) {
                setHasError(true);
            }
        };
        fetchPageData();
    }, []);

    if (hasError) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }
    if (!pageData) {
        return (
            <Container>
                <MainHeader>Aktualności</MainHeader>
                <ClipLoader size="100px" />
            </Container>
        );
    }

    const postRoutes = pageData.map((post) => (
        <Route
            key={post.id}
            path={`/aktualnosci/${post.id}`}
            exact
            render={() => <FullPost title={post.title} content={post.content} date={post.createdAt} />}
        />
    ));

    const newsRouter = (
        <Switch>
            <Route path="/aktualnosci" exact render={() => <NewsContainer posts={pageData} />} />
            {postRoutes || null}
        </Switch>
    );

    return <>{newsRouter}</>;
};

export default News;
