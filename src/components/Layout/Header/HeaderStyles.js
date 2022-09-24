import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-image: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5)), url(${({ bgPhoto }) => bgPhoto});
    background-position: ${({ position }) => position};
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeaderWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: absolute;
}`;
export const HeaderTitle = styled.h1`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 4rem;
    color: white;
    @media (min-width: 850px) {
        font-size: 5rem;
    }
`;

export const HeaderParagraph = styled.p`
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    color: white;
    text-align: center;
    @media (min-width: 850px) {
        font-size: 3rem;
    }
`;
