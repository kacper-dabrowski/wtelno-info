import { ChurchAnnouncements } from '../../src/components/Church/ChurchAnnouncements/ChurchAnnouncements';
import { fetchChurchNews } from '../../src/content/content';

const Page = ({ posts }) => <ChurchAnnouncements articles={posts} />;

export const getStaticProps = async () => {
    return fetchChurchNews();
};

export default Page;
