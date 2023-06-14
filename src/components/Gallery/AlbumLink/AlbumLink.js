import React from 'react';
import { StyledAlbumLink, StyledAlbumLinkContainer, StyledAlbumTitle } from './StyledAlbumLink';

const AlbumLink = ({ albumPath, headerphoto, albumTitle }) => (
    <StyledAlbumLinkContainer>
        <StyledAlbumTitle>{albumTitle}</StyledAlbumTitle>
        <StyledAlbumLink to={albumPath} headerphoto={headerphoto} />
    </StyledAlbumLinkContainer>
);
export default AlbumLink;
