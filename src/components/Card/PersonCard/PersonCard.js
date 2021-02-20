import React from 'react';
import { CardContainer } from '../CardStyles';
import OrganizationPerson from '../OrganizationPeople/OrganizationPerson';

import AddressDataList from './AddressDataList/AddressDataList';

const Card = ({ name, address, email, telephoneNumber, title, webpage }) => (
    <CardContainer>
        <OrganizationPerson name={name} title={title} />
        <AddressDataList address={address} email={email} telephoneNumber={telephoneNumber} webpage={webpage} />
    </CardContainer>
);
export default Card;
