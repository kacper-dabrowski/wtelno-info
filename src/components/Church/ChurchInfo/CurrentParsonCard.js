import React from 'react';
import PersonCard from '../../Card/PersonCard';

export const CurrentParsonCard = ({ parsonData }) => {
    return <PersonCard {...parsonData} />;
};
