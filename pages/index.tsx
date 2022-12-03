import { GetStaticProps } from 'next';
import { Container } from '../src/components/UniversalStyles/ArticleStyles';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { PostsService } from '../src/service/contentService';
import { headersConfig } from '../src/shared/headers/headers';
import { MarkdownParser } from '../src/shared/markdownConfig';

const MainPage = ({ content }) => {
    return (
        <Container>
            <MarkdownParser>{content}</MarkdownParser>
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { content: await new PostsService('pages/wtelno.md').getMarkdown() },
    };
};

export default withPageTitle(MainPage, headersConfig.government.main);
