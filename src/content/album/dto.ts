export type AlbumsDto = AlbumDto[];

export interface AlbumDto {
    id: string;
    media: Media[];
    title: 'string';
}

interface Media {
    url: string;
    formats: {
        thumbnail: Format;
        large: Format;
        medium: Format;
        small: Format;
    };
}

interface Format {
    url: string;
}
