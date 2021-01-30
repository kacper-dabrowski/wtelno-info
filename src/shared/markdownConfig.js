import { Paragraph, Highlight, SecondaryHeader, ArticleImage } from '../components/UniversalStyles/ArticleStyles';

const markdownConfig = {
    escapeHtml: false,
    renderers: {
        paragraph: Paragraph,
        heading: SecondaryHeader,
        strong: Highlight,
        image: ArticleImage,
        imageReference: ArticleImage,
    },
};
export default markdownConfig;
