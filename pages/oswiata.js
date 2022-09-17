import { Page } from '../src/components/Page/Page';
import { fetchDefaultPagesContent } from '../src/pages/content';

const School = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = async () => {
    const { notFound, title, content } = await fetchDefaultPagesContent('oswiata');

    return {
        notFound,
        props: {
            currentPage: {
                title,
                content,
            },
        },
    };
};

export default School;
