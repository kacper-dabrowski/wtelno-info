import { GetStaticProps } from 'next';
import { Container } from '../src/components/UniversalStyles/ArticleStyles';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { PageContentService } from '../src/service/pageContentService';
import { headersConfig } from '../src/shared/headers/headers';
import { MarkdownParser } from '../src/shared/markdownConfig';

const School = ({ content }) => (
    <Container>
        <MarkdownParser>{content}</MarkdownParser>
    </Container>
);

export const getStaticProps: GetStaticProps = async () => {
    const postService = new PageContentService('pages/oswiata.md');
    return {
        props: await postService.getPageData(),
    };
};

export default withPageTitle(School, headersConfig.government.school);
