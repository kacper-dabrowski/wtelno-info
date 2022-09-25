import Government from '../src/components/Government';
import { asPageProps } from '../src/content/asProps';
import { getGovernmentService } from '../src/content/governmentService';
import { withPageTitle } from '../src/hoc/withPageTitle';
import { headersConfig } from '../src/shared/headers/headers';

const Page = ({ mayorData, governorData, memberData }) => {
    return <Government mayorData={mayorData} governorData={governorData} memberData={memberData.government} />;
};

export const getStaticProps = () => asPageProps(() => getGovernmentService().fetchGovernmentInfo());

export default withPageTitle(Page, headersConfig.government.government);
