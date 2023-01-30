import { History } from '../../src/components/History/History';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';
import { PageContentService } from '../../src/service/pageContentService';

const Page = ({ content }) => <History pageData={content} />;

export const getStaticProps = async () => {
    return {
        props: await new PageContentService('pages/historia.md').getPageData(),
    };
};

export default withPageTitle(Page, headersConfig.history);
