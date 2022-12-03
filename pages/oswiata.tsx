import { GetStaticProps } from 'next';
import { Container } from '../src/components/UniversalStyles/ArticleStyles';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { PostsService } from '../src/service/contentService';
import { headersConfig } from '../src/shared/headers/headers';
import { MarkdownParser } from '../src/shared/markdownConfig';

const School = ({ content }) => (
    <Container>
        <MarkdownParser>{content}</MarkdownParser>
    </Container>
);

export const getStaticProps: GetStaticProps = async () => {
    const postService = new PostsService('pages/oswiata.md');
    return {
        props: {
            content: await postService.getMarkdown(),
        },
    };
};

export default withPageTitle(School, headersConfig.government.school);
