import styled from 'styled-components';

export const StyledLightbox = styled.div`
    & div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 850px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            align-content: center;
            margin: 1rem;
        }
    }
`;
export const StyledImage = styled.img`
    width: 20rem;
    height: 10rem;
    margin: 1rem 1rem;
    transition: ease-in-out 0.2s;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    &:hover {
        transform: scale(1.1);
    }
    @media (min-width: 850px) {
        width: 20rem;
        height: 10rem;
    }
`;
