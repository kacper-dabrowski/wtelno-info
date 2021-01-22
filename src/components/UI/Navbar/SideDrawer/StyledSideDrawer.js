import styled from 'styled-components';

export const StyledSideDrawer = styled.nav`
    position: fixed;
    width: 17.5rem;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 101;
    background-color: white;
    padding: 2rem 1rem;
    box-sizing: border-box;
    transition: transform 0.2s ease-in-out;
    transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(-100%)')};
    & ul {
        margin: 0;
        padding: 0;
    }
    @media (min-width: 850px) {
        display: none;
    }
`;
export const StyledLogo = styled.img`
    padding: 0.5rem;
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 4rem;
    height: 4rem;
`;
