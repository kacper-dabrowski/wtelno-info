import React from 'react';
import ListData from '../../../src/components/ListData';
import { ArticleList } from '../../../src/components/UniversalStyles/ArticleStyles';

const PaymentInfo = () => {
    const paymentData = {
        receiver: 'Parafia Rzymsko-Katolicka p.w Św. Michała Archanioła, ul. Kościelna 2, 86-011 Wtelno',
        title: 'Darowizna na cele kultu religijnego. Imię i nazwisko (np. Jan Kowalski)',
        bankAccount: '80 8144 0005 2001 0000 3753 0005',
    };
    return (
        <ArticleList>
            <ListData valueName="Nazwa odbiorcy: " value={paymentData.receiver} />
            <ListData valueName="Tytułem: " value={paymentData.title} />
            <ListData valueName="Nr konta bankowego na cele remontowe: " value={paymentData.bankAccount} />
        </ArticleList>
    );
};
export default PaymentInfo;
