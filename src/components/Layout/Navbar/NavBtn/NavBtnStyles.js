import styled from 'styled-components';

export const StyledLink = styled.a`
    display: block;
    width: 100%;
    text-decoration: none;
    padding: 0.5rem;
    color: #655c56;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        background-color: #655c56;
        color: #eee;
        transition: ease-in-out 0.2s;
    }
    &.active {
        background-color: #655c56;
        color: #eee;
    }
    @media (min-width: 850px) {
        color: #eee;
        font-size: 1rem;
        text-decoration: none;
        padding: 1rem;
        font-weight: bold;
        &.active {
            background-color: #eee;
            color: #655c56;
        }
    }
`;
export const MainLink = styled(StyledLink)`
    font-weight: bold;
`;

export const NestedLinks = styled.ul`
    /*li ul*/
    display: block;

    @media (min-width: 850px) {
        display: none;
        position: absolute;
        padding: 10px;
        color: #655c56;
        background-color: #eee;
        width: 100%;
    }
`;

export const LinkContainer = styled.li`
    width: 100%;
    list-style: none;
    text-align: center;

    @media (min-width: 850px) {
        /* width: 100%; */
        position: relative;
        &:hover ${StyledLink} {
            color: #655c56;
            background-color: #eee;
        }
        &:hover ${NestedLinks} {
            display: block;
            width: 100%;
        }
        & ${NestedLinks} & ${StyledLink} {
            background-color: #eee;
            color: #655c56;
        }
        & ${NestedLinks} & ${StyledLink}:hover {
            width: 100%;
            background-color: #655c56;
            color: #eee;
        }
    }
`;
