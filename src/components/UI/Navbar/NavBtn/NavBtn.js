import React from 'react';
import propTypes from 'prop-types';
import mobile from 'is-mobile';
import { LinkContainer, MainLink, NestedLinks, StyledLink } from './NavBtnStyles';
import paths from '../../../../shared/paths';

const NavBtn = ({ dropdownLinks, btnTitle, btnPath, clicked }) => {
    if (!dropdownLinks)
        return (
            <LinkContainer>
                <MainLink to={btnPath} onClick={clicked}>
                    {btnTitle}
                </MainLink>
            </LinkContainer>
        );

    const dropdownButtons = dropdownLinks.map((link) => (
        <LinkContainer key={link.title}>
            <StyledLink to={link.path} onClick={clicked}>
                {link.title}
            </StyledLink>
        </LinkContainer>
    ));
    return (
        <LinkContainer key={btnTitle}>
            <MainLink to={btnPath || null} exact={btnPath === paths.main.wtelno || mobile()} onClick={clicked}>
                {btnTitle}
            </MainLink>
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
