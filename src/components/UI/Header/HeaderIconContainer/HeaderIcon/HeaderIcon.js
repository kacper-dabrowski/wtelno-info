import styled from 'styled-components';

export const HeaderIcon = styled.a`
    display: inline-block;
    margin: 1rem;
    width: 2rem;
    height: 2rem;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    background-position: center;
    transition: ease-in-out 0.2s;
    position: relative;
    &:hover {
        transform: scale(1.1);
    }

    &::after {
        position: absolute;
        width: 10rem;
        top: 2.5rem;
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
        content: ${({ tooltipContent }) => `"${tooltipContent}"`};
        opacity: 1;
    }
`;
