import News from '../../src/components/News';
import { fetchNews } from '../../src/content/content';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const DefaultPage = ({ posts }) => <News posts={posts} />;

export const getStaticProps = async () => {
    return fetchNews();
};

export default withPageTitle(DefaultPage, headersConfig.news);
