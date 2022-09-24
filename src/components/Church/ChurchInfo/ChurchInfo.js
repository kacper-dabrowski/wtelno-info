import React from 'react';
import HolyMassInfo from './HolyMassInfo';
import PaymentInfo from '../PaymentInfo';
import { CurrentParsonCard } from './CurrentParsonCard';
import { Container, Highlight, KeyValueList, MainHeader, SecondaryHeader } from '../../UniversalStyles/ArticleStyles';
import { MarkdownParser } from '../../../shared/markdownConfig';

export const ChurchInfo = ({ currentPage, importantDates, holyMassInfo, parsonData }) => {
    const importantDatesElements = importantDates?.map?.(({ name, date, _id }) => (
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
            <HolyMassInfo massesPlan={holyMassInfo} />
            <SecondaryHeader>Dane parafialnego konta bankowego</SecondaryHeader>
            <PaymentInfo />
            <SecondaryHeader>Za wszelkie ofiary składamy serdeczne: Bóg zapłać!</SecondaryHeader>
            <SecondaryHeader>Ważne daty</SecondaryHeader>
            <KeyValueList>{importantDatesElements}</KeyValueList>
            <MarkdownParser>{currentPage?.content}</MarkdownParser>
        </Container>
    );
};
