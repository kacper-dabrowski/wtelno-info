import { Page } from '../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../src/pages/content';

const Government = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = defaultPageGetStaticPropsFactory('wladze');

export default Government;
