import { Page } from '../src/components/Page/Page';
import { fetchDefaultPagesContent } from '../src/pages/content';

const Government = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = async () => {
    const { notFound, title, content } = await fetchDefaultPagesContent('soltys');

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

export default Government;
