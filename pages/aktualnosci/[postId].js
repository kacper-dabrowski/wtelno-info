import FullPost from '../../src/components/NewsContainer/FullPost';
import { fetchNewsById, getNewsIds } from '../../src/content/content';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

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

export default withPageTitle(ParticularNewsPage, headersConfig.news);
