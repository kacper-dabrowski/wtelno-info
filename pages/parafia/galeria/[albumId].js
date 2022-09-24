import { Album } from '../../../src/components/Gallery/Album/Album';
import { getChurchService } from '../../../src/content/churchService';
import { asPageProps } from '../../../src/content/asProps';
import websources from '../../../src/shared/websources';

const Page = ({ album, baseUrl }) => {
    return <Album photos={album.media} title={album.title} rootLink={baseUrl} />;
};

export const getStaticPaths = async () => {
    const result = await getChurchService().getAlbums();

    return {
        paths: result.map(({ id }) => ({ params: { albumId: id } })),
        fallback: 'blocking',
    };
};

export const getStaticProps = async (context) => {
    return asPageProps(async () => ({
        album: await getChurchService().getAlbumById(context.params.albumId),
        baseUrl: websources.STRAPI_CMS_URL,
    }));
};

export default Page;
