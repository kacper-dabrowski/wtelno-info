import { Gallery } from '../../src/components/Gallery/Gallery';
import { getAlbums } from '../../src/content/content';
import { paths } from '../../src/shared/paths';
import websources from '../../src/shared/websources';

const Page = ({ albums, mediaUrl, baseUrl }) => <Gallery albums={albums} mediaUrl={mediaUrl} baseUrl={baseUrl} />;

export const getStaticProps = async () => {
    const result = await getAlbums();

    return {
        props: {
            albums: result.map((album) => ({ title: album.title, media: album.media, id: album.id })),
            mediaUrl: websources.STRAPI_CMS_URL,
            baseUrl: paths.gallery,
        },
    };
};

export default Page;
