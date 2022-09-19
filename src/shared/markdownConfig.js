import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {
    Paragraph,
    Highlight,
    SecondaryHeader,
    ArticleImage,
    MainHeader,
} from '../components/UniversalStyles/ArticleStyles';

const markdownConfig = {
    components: {
        h1: MainHeader,
        p: Paragraph,
        h2: SecondaryHeader,
        strong: Highlight,
        img: ArticleImage,
    },
};

export const MarkdownParser = ({ children }) => {
    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} {...markdownConfig} skipHtml={false}>
            {children}
        </ReactMarkdown>
    );
};
