import { GetStaticProps } from 'next';
import { Container } from '../src/components/UniversalStyles/ArticleStyles';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { PageContentService } from '../src/content/page/page';
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
        props: await new PageContentService('/pages/wtelno.md').getContent(),
    };
};

// eslint-disable-next-line import/no-default-export
export default withPageTitle(MainPage, headersConfig.government.main);
