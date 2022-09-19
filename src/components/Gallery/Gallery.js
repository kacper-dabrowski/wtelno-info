import React from 'react';
import { MainHeader } from '../UniversalStyles/ArticleStyles';
import AlbumLink from './AlbumLink/AlbumLink';
import { StyledTileContainer } from './StyledGallery';

export const Gallery = ({ albums, baseUrl, mediaUrl }) => {
    if (!albums?.length) {
        return <MainHeader>Galeria świeci pustkami...</MainHeader>;
    }

    const renderLinks = albums.map((album) => {
        return (
            <AlbumLink
                key={album.id}
                albumTitle={album.title}
                albumPath={`${baseUrl}/${album.id}`}
                headerphoto={`${mediaUrl}${album.media[0].formats.thumbnail.url}`}
            />
        );
    });

    return (
        <>
            <MainHeader>Dostępne galerie:</MainHeader>
            <StyledTileContainer>{renderLinks}</StyledTileContainer>
        </>
    );
};
