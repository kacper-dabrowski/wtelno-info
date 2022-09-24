import Link from 'next/link';
import React from 'react';
import { StyledAlbumLink, StyledAlbumLinkContainer, StyledAlbumTitle } from './StyledAlbumLink';

const AlbumLink = ({ albumPath, headerphoto, albumTitle }) => (
    <StyledAlbumLinkContainer>
        <StyledAlbumTitle>{albumTitle}</StyledAlbumTitle>
        <Link href={albumPath}>
            <StyledAlbumLink href={albumPath} headerphoto={headerphoto} />
        </Link>
    </StyledAlbumLinkContainer>
);
export default AlbumLink;
