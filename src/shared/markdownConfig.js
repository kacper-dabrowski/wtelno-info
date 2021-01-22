import {
    Paragraph,
    Highlight,
    SecondaryHeader,
    ArticleList,
    ArticleImage,
} from '../components/UniversalStyles/ArticleStyles';

const markdownConfig = {
    escapeHtml: false,
    renderers: {
        paragraph: Paragraph,
        heading: SecondaryHeader,
        strong: Highlight,
        list: ArticleList,
        image: ArticleImage,
        imageReference: ArticleImage,
    },
};
export default markdownConfig;
