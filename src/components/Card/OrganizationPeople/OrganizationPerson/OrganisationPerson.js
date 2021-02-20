import React from 'react';
import { Name, Title } from '../../CardStyles';

const OrganizationPerson = ({ title, name }) => {
    let person;
    if (!title) {
        person = <Name>{name}</Name>;
        return person;
    }
    person = (
        <>
            <Name>{name}</Name>
            <Title>{title}</Title>
        </>
    );
    return <>{person}</>;
};

export default OrganizationPerson;
