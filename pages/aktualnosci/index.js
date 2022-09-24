import News from '../../src/components/News';
import { fetchNews } from '../../src/content/content';

const DefaultPage = ({ posts }) => <News posts={posts} />;

export const getStaticProps = async () => {
    return fetchNews();
};

export default DefaultPage;
