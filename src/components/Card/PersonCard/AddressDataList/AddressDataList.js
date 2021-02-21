import React from 'react';
import ExternalLink from '../../../ExternalLink';
import { AddressData, PersonDataImage } from '../../CardStyles';

const AddressDataList = ({ address, telephoneNumber, email, webpage }) => {
    const addressItem = address && (
        <li>
            {address.street && <p>{address.street}</p>}
            {address.zipcode || (address.place && <p>{address.zipcode || address.place}</p>)}
        </li>
    );
    const telephoneNumberItem = telephoneNumber && (
        <li>
            <PersonDataImage src={telephoneNumber} alt="nr telefonu" />
        </li>
    );

    const emailItem = email && (
        <li>
            <PersonDataImage src={email} alt="e-mail" />
        </li>
    );

    const webpageItem = (
        <li>
            <ExternalLink href="http://koronowo.pl" target="_blank">
                {webpage}
            </ExternalLink>
        </li>
    );
    return (
        <AddressData>
            {addressItem}
            {telephoneNumberItem}
            {emailItem}
            {webpageItem}
        </AddressData>
    );
};

export default AddressDataList;
