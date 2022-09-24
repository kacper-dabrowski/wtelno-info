import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import LightboxImage from './LightboxImage';

const Lightbox = ({ photos, options, sourceUrl }) => {
    if (!photos) {
        return (
            <SimpleReactLightbox>
                <SRLWrapper options={options} />
            </SimpleReactLightbox>
        );
    }

    const photoGallery = photos.map((photo) => (
        <LightboxImage
            key={sourceUrl + photo._id}
            thumbnailSrc={sourceUrl + photo.formats.thumbnail.url}
            fullSrc={sourceUrl + photo.url}
            alt={photo.title}
        />
    ));

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>{photoGallery}</SRLWrapper>
        </SimpleReactLightbox>
    );
};

export default Lightbox;
