import { Album } from '../../src/components/Gallery/Album/Album';
import { getAlbumById, getAlbums } from '../../src/pages/content';

const Page = ({ album, baseUrl }) => {
    return <Album photos={album.media} title={album.title} rootLink={baseUrl} />;
};

export const getStaticPaths = async () => {
    const result = await getAlbums();

    return {
        paths: result.map(({ id }) => ({ params: { albumId: id } })),
        fallback: 'blocking',
    };
};

export const getStaticProps = async (context) => {
    return getAlbumById(context.params.albumId);
};

export default Page;
