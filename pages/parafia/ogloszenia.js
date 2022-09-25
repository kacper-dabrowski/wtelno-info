import { ChurchAnnouncements } from '../../src/components/Church/ChurchAnnouncements/ChurchAnnouncements';
import { fetchChurchNews } from '../../src/content/content';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const Page = ({ posts }) => <ChurchAnnouncements articles={posts} />;

export const getStaticProps = async () => {
    return fetchChurchNews();
};

export default withPageTitle(Page, headersConfig.church.churchAnnouncements);
