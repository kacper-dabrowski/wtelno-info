import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 3.75rem;
    background-color: transparent;
    position: absolute;
    z-index: 1;
`;
export const StyledNavbarList = styled.ul`
    display: none;

    @media (min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;

        & li:hover {
            color: black;
        }
    }
`;
