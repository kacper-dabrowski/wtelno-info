import { Page } from '../../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../../src/content/content';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const DefaultPage = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = defaultPageGetStaticPropsFactory('regulamin-cmentarza');

export default withPageTitle(DefaultPage, headersConfig.church.main);
