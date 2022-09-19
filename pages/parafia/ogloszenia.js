import { fetchChurchNews } from '../../src/pages/content';
import { ChurchAnnouncements } from '../../src/components/Church/ChurchAnnouncements/ChurchAnnouncements';

const Page = ({ posts }) => <ChurchAnnouncements articles={posts} />;

export const getStaticProps = async () => {
    return fetchChurchNews();
};

export default Page;
