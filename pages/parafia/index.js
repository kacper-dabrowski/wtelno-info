import { ChurchInfo } from '../../src/components/Church/ChurchInfo/ChurchInfo';
import { asPageProps } from '../../src/content/asProps';
import { getChurchService } from '../../src/content/churchService';

const Page = ({ currentPage, dates, holyMasses, parson }) => {
    return (
        <ChurchInfo currentPage={currentPage} importantDates={dates} holyMassInfo={holyMasses} parsonData={parson} />
    );
};

export const getStaticProps = async () => {
    return asPageProps(getChurchService().getChurchInfo);
};

export default Page;
