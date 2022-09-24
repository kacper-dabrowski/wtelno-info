import React from 'react';
import OrganizationCard from '../Card/OrganizationCard';
import Card from '../Card/PersonCard';
import { Container, MainHeader, SecondaryHeader } from '../UniversalStyles/ArticleStyles';

const Government = ({ mayorData, governorData, memberData }) => {
    return (
        <Container>
            <MainHeader>Władze</MainHeader>
            <SecondaryHeader>Informacje administracyjne wsi Wtelno.</SecondaryHeader>
            <Card {...governorData} />
            <OrganizationCard name="Rada Sołecka" people={memberData} />
            <Card {...mayorData} />
        </Container>
    );
};

export default Government;
