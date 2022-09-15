import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { MainHeader, Container } from '../../components/UniversalStyles/ArticleStyles';
import NewsContainer from '../../components/NewsContainer';
import FullPost from '../../components/NewsContainer/FullPost';
import useRequest from '../../shared/hooks/useRequest';
import websources from '../../shared/websources';

const News = () => {
    const [response, loading, error] = useRequest(`${websources.STRAPI_CMS_URL}/events`);

    const pageData = response?.data?.reverse();

    if (error) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }

    if (loading) {
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
            <Route path="/aktualnosci" exact render={() => <NewsContainer posts={pageData.reverse()} />} />
            {postRoutes || null}
        </Switch>
    );

    return <>{newsRouter}</>;
};

export default News;
