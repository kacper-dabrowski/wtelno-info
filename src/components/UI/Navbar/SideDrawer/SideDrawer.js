import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../../../public/assets/drzewowsvg.svg';
import NavbarItems from '../NavbarItems/NavbarItems';
import { StyledLogo, StyledSideDrawer } from './StyledSideDrawer';

const sideDrawer = ({ isActive, SidedrawerToggled }) => {
    return (
        <StyledSideDrawer isActive={isActive}>
            <StyledLogo src={logo} alt="Wtelno" />
            <nav>
                <NavbarItems toggleSidedrawer={SidedrawerToggled} />
            </nav>
        </StyledSideDrawer>
    );
};
sideDrawer.propTypes = {
    isActive: PropTypes.bool.isRequired,
};

export default sideDrawer;
