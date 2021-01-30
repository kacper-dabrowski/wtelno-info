import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownConfig from '../../../shared/markdownConfig';
import {
    Container,
    Highlight,
    KeyValueList,
    MainHeader,
    SecondaryHeader,
} from '../../../components/UniversalStyles/ArticleStyles';
import HolyMassInfo from './HolyMassInfo';
import PaymentInfo from '../PaymentInfo';
import websources from '../../../shared/websources';
import useRequest from '../../../shared/hooks/useRequest';
import CurrentParsonCard from './CurrentParsonCard';
import { CenteredSpinner } from '../../../components/Gallery/StyledGallery';

const ChurchInfo = () => {
    const [importantDates, importantDatesLoading, importantDatesError] = useRequest(
        `${websources.STRAPI_CMS_URL}/important-date`,
        'GET'
    );
    const [pages, pagesLoading, pagesError] = useRequest(`${websources.STRAPI_CMS_URL}/pages`, 'GET');
    const [parsonInfo, parsonInfoLoading, parsonInfoError] = useRequest(`${websources.STRAPI_CMS_URL}/parson`, 'GET');
    const [holyMassInfo, holyMassInfoLoading, holyMassError] = useRequest(
        `${websources.STRAPI_CMS_URL}/holy-mass`,
        'GET'
    );

    const pageData = pages?.data?.find?.((page) => page.name === 'parafia');
    const parsonData = parsonInfo?.data?.parson?.[0];

    const errorsArray = [importantDatesError, pagesError, parsonInfoError, holyMassError];
    const loadingArray = [importantDatesLoading, pagesLoading, parsonInfoLoading, holyMassInfoLoading];
    const hasError = errorsArray.some((error) => error);

    if (hasError) {
        return <h2>Coś poszło nie tak...</h2>;
    }

    const isPageLoading = loadingArray.some((loading) => loading);

    if (isPageLoading) {
        return (
            <Container>
                <CenteredSpinner size="100px" />
            </Container>
        );
    }

    const importantDatesElements = importantDates?.data?.date?.map?.(({ name, date, _id }) => (
        <li key={_id}>
            <Highlight>{name}</Highlight>
            {date}
        </li>
    ));

    return (
        <Container>
            <MainHeader>Parafia pw. św. Michała Archanioła</MainHeader>
            <SecondaryHeader>ul.Kościelna 2, 86-011 Wtelno</SecondaryHeader>
            <CurrentParsonCard parsonData={parsonData} />
            <SecondaryHeader>Msze Święte:</SecondaryHeader>
            <HolyMassInfo massesPlan={holyMassInfo?.data} />
            <SecondaryHeader>Dane parafialnego konta bankowego</SecondaryHeader>
            <PaymentInfo />
            <SecondaryHeader>Za wszelkie ofiary składamy serdeczne: Bóg zapłać!</SecondaryHeader>
            <SecondaryHeader>Ważne daty</SecondaryHeader>
            <KeyValueList>{importantDatesElements}</KeyValueList>
            <ReactMarkdown {...markdownConfig} source={pageData?.content} />
        </Container>
    );
};

export default React.memo(ChurchInfo);
