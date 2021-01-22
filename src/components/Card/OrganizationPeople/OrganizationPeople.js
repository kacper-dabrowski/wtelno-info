import React from 'react';
import OrganizationPerson from './OrganizationPerson';
import { PeopleList } from '../CardStyles';

const OrganizationPeople = ({ persons }) => {
    const people = persons.map((person) => (
        <li key={person.name}>
            <OrganizationPerson name={person.name} title={person.title} />
        </li>
    ));
    return <PeopleList>{people}</PeopleList>;
};
export default OrganizationPeople;
