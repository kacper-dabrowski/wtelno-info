import React from 'react';
import ExternalLink from '../ExternalLink';
import { AddressData, CardContainer } from './CardStyles';
import OrganizationPerson from './OrganizationPeople/OrganizationPerson';

const Card = ({ name, address, email, telephoneNumber, title, webpage }) => (
    <CardContainer>
        <OrganizationPerson name={name} title={title} />
        <AddressData>
            {address ? (
                <li>
                    {address.street ? <p>{address.street}</p> : null}
                    {address.zipcode || address.place ? <p>{address.zipcode || address.place}</p> : null}
                </li>
            ) : null}
            {telephoneNumber ? <li>{telephoneNumber}</li> : null}
            {email ? <li>{email}</li> : null}
            {webpage ? (
                <li>
                    <ExternalLink href="http://koronowo.pl" target="_blank">
                        {webpage}
                    </ExternalLink>
                </li>
            ) : null}
        </AddressData>
    </CardContainer>
);
export default Card;
