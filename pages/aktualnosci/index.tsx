import { GetStaticProps } from 'next';
import News from '../../src/components/News';
import { newsService } from '../../src/content/posts/news';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const DefaultPage = ({ posts }) => <News posts={posts} />;

export const getStaticProps: GetStaticProps = async () => {
    const postsData = await newsService.getContent();

    return {
        props: { posts: postsData },
    };
};

export default withPageTitle(DefaultPage, headersConfig.news);
