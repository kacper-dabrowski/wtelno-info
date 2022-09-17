import { Paragraph, Highlight, SecondaryHeader, ArticleImage } from '../components/UniversalStyles/ArticleStyles';

const markdownConfig = {
    renderers: {
        paragraph: Paragraph,
        heading: SecondaryHeader,
        strong: Highlight,
        image: ArticleImage,
        imageReference: ArticleImage,
    },
};

export { markdownConfig };
