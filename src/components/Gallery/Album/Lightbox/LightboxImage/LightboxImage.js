import React from 'react';
import { StyledImage } from '../StyledLightbox';

const lightboxImage = ({ thumbnailSrc, fullSrc, alt }) => (
    <a href={fullSrc} data-attribute="SRL">
        <StyledImage src={thumbnailSrc} alt={alt} />
    </a>
);

export default lightboxImage;
