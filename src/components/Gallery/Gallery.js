import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { CenteredSpinner, StyledTileContainer } from './StyledGallery';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import AlbumLink from './AlbumLink/AlbumLink';
import Album from './Album';

const Gallery = ({ fetchUrl, baseUrl, mediaUrl }) => {
    const [hasError, setHasError] = useState(false);
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        const onFetchAlbums = async () => {
            try {
                const fetchedMedia = await axios.get(fetchUrl);
                setAlbums(fetchedMedia.data);
            } catch (error) {
                setHasError(true);
            }
        };
        onFetchAlbums();
    }, [fetchUrl]);

    if (hasError) {
        return (
            <>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </>
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
                    {!albums ? (
                        <Container>
                            <CenteredSpinner size="100px" />
                        </Container>
                    ) : null}
                    <StyledTileContainer>{renderedPaths}</StyledTileContainer>
                </Route>
            </Switch>
        </>
    );
};

export default Gallery;
