import ContactPage from '../../src/components/Contact/Contact';
import { withPageTitle } from '../../src/hoc/withPageTitle';
import { headersConfig } from '../../src/shared/headers/headers';

const Page = () => <ContactPage />;

export default withPageTitle(Page, headersConfig.contact.main);
