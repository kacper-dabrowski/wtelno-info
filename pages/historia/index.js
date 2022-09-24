import { History } from '../../src/components/History/History';
import { getHistoryPageContent } from '../../src/content/content';

const Page = ({ pageData }) => <History pageData={pageData} />;

export const getStaticProps = async () => {
    return getHistoryPageContent();
};

export default Page;
