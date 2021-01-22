import React, { useCallback, useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import NavbarItems from './NavbarItems';
import { StyledNavbarList, StyledNavbar } from './StyledNavbar';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSideDrawerHandler = useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);

    return (
        <StyledNavbar>
            <Hamburger clicked={toggleSideDrawerHandler} isActive={isActive} />
            <SideDrawer isActive={isActive} SidedrawerToggled={toggleSideDrawerHandler} />
            <Backdrop clicked={toggleSideDrawerHandler} show={isActive} />
            <StyledNavbarList>
                <NavbarItems />
            </StyledNavbarList>
        </StyledNavbar>
    );
};

export default Navbar;
