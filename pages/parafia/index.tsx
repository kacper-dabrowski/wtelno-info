import { GetStaticProps } from 'next';
import { ChurchInfo } from '../../src/components/Church/ChurchInfo/ChurchInfo';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { PostsService } from '../../src/service/contentService';
import { headersConfig } from '../../src/shared/headers/headers';

const Page = ({ data, content }) => {
    console.log(data, content);

    return (
        <ChurchInfo
            currentPage={content}
            importantDates={data.} holyMassInfo={[holyMasses]} parsonData={parson} />;
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const postsService = new PostsService('pages/parafia.md');

    console.log(await postsService.getPostsData());

    return {
        props: {
            content: await postsService.getMarkdown(),
            data: await postsService.getPostsData(),
        },
    };
};

export default withPageTitle(Page, headersConfig.church.main);
