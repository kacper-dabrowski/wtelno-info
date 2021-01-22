import React from 'react';
import AlbumTitle from './AlbumTitle/AlbumTitle';
import Lightbox from './Lightbox/Lightbox';
import { AlbumContainer } from './StyledAlbum';

const Album = ({ photos, options, title, rootLink, sourceUrl }) => (
    <AlbumContainer>
        <AlbumTitle title={title} prevPage={rootLink} />
        <Lightbox photos={photos} options={options} sourceUrl={sourceUrl} />
    </AlbumContainer>
);
export default Album;
