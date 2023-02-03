import { GetStaticProps } from 'next';
import { ChurchInfo } from '../../src/components/Church/ChurchInfo/ChurchInfo';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { PageContentService } from '../../src/content/page/page';
import { headersConfig } from '../../src/shared/headers/headers';

const Page = ({ data, content }) => {
    return (
        <ChurchInfo currentPage={content} importantDates={undefined} holyMassInfo={undefined} parsonData={undefined} />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const postsService = new PageContentService('pages/parafia.md');

    return {
        props: await postsService.getContent(),
    };
};

export default withPageTitle(Page, headersConfig.church.main);
