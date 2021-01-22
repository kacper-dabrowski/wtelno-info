import React from 'react';
import PropTypes from 'prop-types';
import { Hamburger, HamburgerBox, HamburgerInner } from './StyledHamburger';

const hamburger = ({ clicked }) => (
    <Hamburger type="button" onClick={clicked}>
        <HamburgerBox>
            <HamburgerInner />
        </HamburgerBox>
    </Hamburger>
);

hamburger.propTypes = {
    clicked: PropTypes.func.isRequired,
};

export default hamburger;
