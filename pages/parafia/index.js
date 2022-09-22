import { ChurchInfo } from '../../src/components/Church/ChurchInfo/ChurchInfo';
import { getChurchInfo } from '../../src/pages/content';

const Page = ({ currentPage, importantDates, holyMasses, parson }) => (
    <ChurchInfo
        currentPage={currentPage}
        importantDates={importantDates}
        holyMassInfo={holyMasses}
        parsonData={parson}
    />
);

export const getStaticProps = async () => {
    return getChurchInfo();
};

export default Page;
