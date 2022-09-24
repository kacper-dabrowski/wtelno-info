import { Gallery } from '../../../src/components/Gallery/Gallery';
import { getChurchService } from '../../../src/content/churchService';
import { paths } from '../../../src/shared/paths';
import websources from '../../../src/shared/websources';

const Page = ({ albums, mediaUrl, baseUrl }) => <Gallery albums={albums} mediaUrl={mediaUrl} baseUrl={baseUrl} />;

export const getStaticProps = async () => {
    const result = await getChurchService().getAlbums();

    return {
        props: {
            albums: result.map((album) => ({ title: album.title, media: album.media, id: album.id })),
            mediaUrl: websources.STRAPI_CMS_URL,
            baseUrl: paths.church.churchGallery,
        },
    };
};

export default Page;