import { fetchNews } from '../../src/pages/content';
import News from '../../src/components/News';

const DefaultPage = ({ posts }) => <News posts={posts} />;

export const getStaticProps = async () => {
    return fetchNews();
};

export default DefaultPage;
