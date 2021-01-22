import React from 'react';
import { AddressData, CardContainer, PersonDataImage } from './CardStyles';
import OrganizationPerson from './OrganizationPeople/OrganizationPerson';
import ExternalLink from '../ExternalLink';

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
            {telephoneNumber ? (
                <li>
                    <PersonDataImage src={telephoneNumber} alt="nr telefonu" />
                </li>
            ) : null}
            {email ? (
                <li>
                    <PersonDataImage src={email} alt="e-mail" />
                </li>
            ) : null}
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
