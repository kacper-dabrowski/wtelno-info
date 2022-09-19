import { Album } from '../../../src/components/Gallery/Album/Album';
import { getChurchAlbumById, getChurchAlbums } from '../../../src/pages/content';

const Page = ({ album, baseUrl }) => {
    return <Album photos={album.media} title={album.title} rootLink={baseUrl} />;
};

export const getStaticPaths = async () => {
    const result = await getChurchAlbums();

    return {
        paths: result.map(({ id }) => ({ params: { albumId: id } })),
        fallback: 'blocking',
    };
};

export const getStaticProps = async (context) => {
    const result = await getChurchAlbumById(context.params.albumId);

    return result;
};

export default Page;
