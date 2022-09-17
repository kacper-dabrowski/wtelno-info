import React from 'react';
import { CenteredSpinner, StyledTileContainer } from './StyledGallery';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import AlbumLink from './AlbumLink/AlbumLink';
import Album from './Album';
import useRequest from '../../shared/hooks/useRequest';

const Gallery = ({ fetchUrl, baseUrl, mediaUrl }) => {
    const [response, loading, error] = useRequest(fetchUrl, 'GET');

    const albums = response?.data;

    if (error) {
        return (
            <>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </>
        );
    }

    if (loading) {
        return (
            <Container>
                <MainHeader>Dostępne galerie:</MainHeader>
                <CenteredSpinner size="100px" />
            </Container>
        );
    }

    let renderedMedia = null;
    let renderedPaths = null;
    if (albums && albums.length > 0) {
        renderedMedia = albums.map((album) => (
            <Route key={album._id} path={`${baseUrl}/${album.id}`}>
                <Album
                    photos={album.media}
                    title={album.title}
                    rootLink={baseUrl}
                    fetchUrl={fetchUrl}
                    sourceUrl={mediaUrl}
                />
            </Route>
        ));
        renderedPaths = albums.map((album) => (
            <AlbumLink
                key={album._id}
                albumTitle={album.title}
                albumPath={`${baseUrl}/${album.id}`}
                headerphoto={`${mediaUrl}${album.media[0].formats.thumbnail.url}`}
            />
        ));
    } else if (albums && albums.length === 0) {
        renderedMedia = <MainHeader>Galeria świeci pustkami...</MainHeader>;
    }

    return (
        <>
            <Switch>
                {renderedMedia}
                <Route path={baseUrl} exact>
                    <MainHeader>Dostępne galerie:</MainHeader>
                    <StyledTileContainer>{renderedPaths}</StyledTileContainer>
                </Route>
            </Switch>
        </>
    );
};

export default Gallery;
