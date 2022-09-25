import { Page } from '../src/components/Page/Page';
import { defaultPageGetStaticPropsFactory } from '../src/content/content';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { headersConfig } from '../src/shared/headers/headers';

const School = ({ currentPage }) => <Page currentPage={currentPage} />;

export const getStaticProps = defaultPageGetStaticPropsFactory('oswiata');

export default withPageTitle(School, headersConfig.government.school);
