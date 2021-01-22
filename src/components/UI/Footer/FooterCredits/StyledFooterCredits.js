import styled from 'styled-components';

export const CreditsIcon = styled.a`
    display: inline-block;
    margin: 1rem;
    width: 2rem;
    height: 2rem;
    background-image: url(${({ icon }) => icon});
    background-size: cover;
    background-position: center;
    transition: ease-in-out 0.2s;
    position: relative;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    &::after {
        position: absolute;
        text-align: center;
        width: 6rem;
        bottom: 3.25rem;
        left: 1.5rem;
        background: white;
        color: #655c56;
        padding: 0.5rem;
        opacity: 0;
        transition: ease-in-out 0.2s;
        border: 1px solid #655c56;
        -webkit-box-shadow: 10px 10px 114px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 114px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 114px 0px rgba(0, 0, 0, 0.75);
    }

    &:hover::after {
        transform: translate(-50%, 10%);
        content: ${({ personName }) => `"${personName}"`};
        opacity: 1;
    }
`;
