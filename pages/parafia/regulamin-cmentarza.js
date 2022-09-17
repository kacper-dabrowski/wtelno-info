import { Page } from '../../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../../src/pages/content';

const DefaultPage = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = defaultPageGetStaticPropsFactory('regulamin-cmentarza');

export default DefaultPage;
