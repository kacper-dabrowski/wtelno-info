import { getHistoryPageContent } from '../../src/pages/content';
import { History } from '../../src/components/History/History';

const Page = ({ pageData }) => <History pageData={pageData} />;

export const getStaticProps = async () => {
    return getHistoryPageContent();
};

export default Page;
