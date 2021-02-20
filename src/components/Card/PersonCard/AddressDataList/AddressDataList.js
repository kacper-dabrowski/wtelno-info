import React from 'react';
import ExternalLink from '../../../ExternalLink';
import { AddressData, PersonDataImage } from '../../CardStyles';

const AddressDataList = ({ address, telephoneNumber, email, webpage }) => (
    <AddressData>
        {address && (
            <li>
                {address.street && <p>{address.street}</p>}
                {address.zipcode || (address.place && <p>{address.zipcode || address.place}</p>)}
            </li>
        )}
        {telephoneNumber && (
            <li>
                <PersonDataImage src={telephoneNumber} alt="nr telefonu" />
            </li>
        )}
        {email && (
            <li>
                <PersonDataImage src={email} alt="e-mail" />
            </li>
        )}
        {webpage && (
            <li>
                <ExternalLink href="http://koronowo.pl" target="_blank">
                    {webpage}
                </ExternalLink>
            </li>
        )}
    </AddressData>
);

export default AddressDataList;
