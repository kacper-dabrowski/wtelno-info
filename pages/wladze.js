import Government from '../src/components/Government';
import { fetchGovernmentInfo } from '../src/pages/content';

const Page = ({ mayorData, governorData, memberData }) => (
    <Government mayorData={mayorData} governorData={governorData} memberData={memberData} />
);

export const getStaticProps = async () => fetchGovernmentInfo();

export default Page;
