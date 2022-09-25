import { History } from '../../src/components/History/History';
import { getHistoryPageContent } from '../../src/content/content';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const Page = ({ pageData }) => <History pageData={pageData} />;

export const getStaticProps = async () => {
    return getHistoryPageContent();
};

export default withPageTitle(Page, headersConfig.history);
