import { Page } from '../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../src/content/content';

const School = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = defaultPageGetStaticPropsFactory('oswiata');

export default School;
