import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { ClipLoader } from 'react-spinners';
import markdownConfig from '../../../shared/markdownConfig';
import {
    Container,
    Highlight,
    KeyValueList,
    MainHeader,
    SecondaryHeader,
} from '../../../components/UniversalStyles/ArticleStyles';

import PersonCard from '../../../components/Card/PersonCard';
import HolyMassInfo from './HolyMassInfo';
import PaymentInfo from '../PaymentInfo';
import websources from '../../../shared/websources';
import photoApiCall from '../../../shared/utils/photoApi';

class ChurchInfo extends Component {
    state = {
        parsonInfo: null,
        importantDates: null,
        holyMasses: {},
    };

    async componentDidMount() {
        try {
            const responseWithContent = await axios.all([
                axios.get(`${websources.STRAPI_CMS_URL}/parson`),
                axios.get(`${websources.STRAPI_CMS_URL}/important-date`),
                axios.get(`${websources.STRAPI_CMS_URL}/holy-mass`),
                axios.get(`${websources.STRAPI_CMS_URL}/pages`),
            ]);
            const [fetchedParsonInfo, fetchedImportantDates, fetchedHolyMasses, fetchedContent] = responseWithContent;

            const pageData = fetchedContent.data.find((page) => page.name === 'parafia');

            const parsonInfo = fetchedParsonInfo.data.parson[0];
            const convertedData = await Promise.all([
                photoApiCall(parsonInfo.email),
                photoApiCall(parsonInfo.telephoneNumber),
            ]);
            const [parsonMail, parsonTelephoneNumber] = convertedData;
            parsonInfo.email = parsonMail;
            parsonInfo.telephoneNumber = parsonTelephoneNumber;

            this.setState({
                parsonInfo,
                importantDates: fetchedImportantDates.data,
                holyMasses: fetchedHolyMasses.data,
                pageData,
            });
        } catch (error) {
            this.setState({ hasError: true });
        }
    }

    render() {
        const { parsonInfo, importantDates, holyMasses, pageData, hasError } = this.state;
        if (hasError) {
            return (
                <Container>
                    <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
                </Container>
            );
        }
        const isPageLoaded = parsonInfo && importantDates && holyMasses && pageData;

        if (!isPageLoaded) {
            return (
                <Container>
                    <MainHeader>Parafia pw. św. Michała Archanioła</MainHeader>
                    <ClipLoader size="100px" />
                </Container>
            );
        }

        const importantDatesElements = importantDates.date.map(({ name, date, _id }) => (
            <li key={_id}>
                <Highlight>{name}</Highlight>
                {date}
            </li>
        ));
        const currentParson = parsonInfo;

        return (
            <Container>
                <MainHeader>Parafia pw. św. Michała Archanioła</MainHeader>
                <SecondaryHeader>ul.Kościelna 2, 86-011 Wtelno</SecondaryHeader>
                <PersonCard {...currentParson} />
                <SecondaryHeader>Msze Święte:</SecondaryHeader>
                <HolyMassInfo massesPlan={holyMasses} />
                <SecondaryHeader>Dane parafialnego konta bankowego</SecondaryHeader>
                <PaymentInfo />
                <SecondaryHeader>Za wszelkie ofiary składamy serdeczne: Bóg zapłać!</SecondaryHeader>
                <SecondaryHeader>Ważne daty</SecondaryHeader>
                <KeyValueList>{importantDatesElements}</KeyValueList>
                <ReactMarkdown {...markdownConfig} source={pageData.content} />
            </Container>
        );
    }
}
export default ChurchInfo;
