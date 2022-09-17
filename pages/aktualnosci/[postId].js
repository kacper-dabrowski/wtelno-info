import FullPost from '../../src/components/NewsContainer/FullPost';
import { fetchNewsById, getNewsIds } from '../../src/pages/content';

const ParticularNewsPage = (postData) => <FullPost {...postData} />;

export const getStaticPaths = async () => {
    const newsIds = await getNewsIds();

    return {
        fallback: 'blocking',
        paths: newsIds.map((postId) => ({ params: { postId } })),
    };
};

export const getStaticProps = async (context) => {
    return fetchNewsById(context.params.postId);
};

export default ParticularNewsPage;
