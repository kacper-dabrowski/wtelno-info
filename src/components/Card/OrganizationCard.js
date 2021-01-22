import React from 'react';
import { CardContainer, OrganizationName } from './CardStyles';
import OrganizationPeople from './OrganizationPeople';

const Card = ({ name, people }) => {
    return (
        <CardContainer>
            <OrganizationName>{name}</OrganizationName>
            <OrganizationPeople persons={people} />
        </CardContainer>
    );
};
export default Card;
