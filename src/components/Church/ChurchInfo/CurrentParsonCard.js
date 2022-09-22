import React from 'react';
import PersonCard from '../../Card/PersonCard';

export const CurrentParsonCard = ({ parsonData }) => {
    console.log(parsonData);
    return <PersonCard {...parsonData} />;
};
