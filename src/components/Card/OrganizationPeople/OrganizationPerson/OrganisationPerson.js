import React from 'react';
import PropTypes from 'prop-types';
import { Name, Title } from '../../CardStyles';

const OrganizationPerson = ({ title, name }) => {
    let person;
    if (!title) {
        person = <Name>{name}</Name>;
    }
    person = (
        <>
            <Name>{name}</Name>
            <Title>{title}</Title>
        </>
    );
    return <>{person}</>;
};
OrganizationPerson.propTypes = {
    name: PropTypes.string.isRequired,
};
export default OrganizationPerson;
