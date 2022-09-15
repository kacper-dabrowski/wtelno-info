import React from 'react';
import propTypes from 'prop-types';
import mobile from 'is-mobile';
import { LinkContainer, MainLink, NestedLinks, StyledLink } from './NavBtnStyles';
import paths from '../../../../shared/paths';
import Link from 'next/link';

const NavBtn = ({ dropdownLinks, btnTitle, btnPath, clicked }) => {
    if (!dropdownLinks)
        return (
            <LinkContainer>
            <Link href={btnPath}>
                <MainLink  onClick={clicked}>
                    {btnTitle}
                </MainLink>
                </Link>
            </LinkContainer>
        );

    const dropdownButtons = dropdownLinks.map((link) => (
        <LinkContainer key={link.title}>
            <Link href={link.path}>
            <StyledLink  onClick={clicked}>
                {link.title}
            </StyledLink>
            </Link>
        </LinkContainer>
    ));

    return (
        <LinkContainer key={btnTitle}>
            <Link href={btnPath || null}>
            <MainLink  exact={btnPath === paths.main.wtelno || mobile()} onClick={clicked}>
                {btnTitle}
            </MainLink>
            </Link>
            <NestedLinks>{dropdownButtons}</NestedLinks>
        </LinkContainer>
    );
};

NavBtn.defaultProps = {
    dropdownLinks: null,
};
NavBtn.propTypes = {
    dropdownLinks: propTypes.arrayOf(Object),
    btnTitle: propTypes.string.isRequired,
    btnPath: propTypes.string.isRequired,
};
export default NavBtn;
