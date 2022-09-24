import Government from '../src/components/Government';
import { asPageProps } from '../src/content/asProps';
import { getGovernmentService } from '../src/content/governmentService';

const Page = ({ mayorData, governorData, memberData }) => {
    return <Government mayorData={mayorData} governorData={governorData} memberData={memberData.government} />;
};

export const getStaticProps = () => asPageProps(() => getGovernmentService().fetchGovernmentInfo());

export default Page;
