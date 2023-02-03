import { GetStaticProps } from 'next';
import { FullPost } from '../../src/components/NewsContainer/FullPost/FullPost';
import { newsService } from '../../src/content/posts/news';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const ParticularNewsPage = ({ post }: { post: { title: string; createdAt: string; content: string } }) => (
    <FullPost {...post} />
);

export const getStaticPaths = async () => {
    const newsTitles = await newsService.getContent();

    return {
        fallback: 'blocking',
        paths: newsTitles.map(({ path: postName }) => ({ params: { postName } })),
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const post = await newsService.getPostByPath(context.params.postName.toString());
    return {
        props: { post },
    };
};

export default withPageTitle(ParticularNewsPage, headersConfig.news);
