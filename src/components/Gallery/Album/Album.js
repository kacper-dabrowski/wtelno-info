import React from 'react';
import AlbumTitle from './AlbumTitle/AlbumTitle';
import Lightbox from './Lightbox/Lightbox';
import { AlbumContainer } from './StyledAlbum';

export const Album = ({ photos, options, title, rootLink }) => (
    <AlbumContainer>
        <AlbumTitle title={title} prevPage={rootLink} />
        <Lightbox photos={photos} options={options} sourceUrl={rootLink} />
    </AlbumContainer>
);
