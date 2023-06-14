import React from 'react';
import PersonCard from '../../../components/Card/PersonCard';

const CurrentParsonCard = ({ parsonData }) => {
    const convertedParsonData = {
        ...parsonData,
        email: parsonData.email,
        telephoneNumber: parsonData.telephoneNumber,
    };

    return <PersonCard {...convertedParsonData} />;
};

export default React.memo(CurrentParsonCard);
