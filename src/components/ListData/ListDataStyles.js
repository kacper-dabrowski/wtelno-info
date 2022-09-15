import styled from 'styled-components';
import { Paragraph, SecondaryHeader } from '../UniversalStyles/ArticleStyles';
import scissorsIcon from '../../../public/static/util-images/scissors.png';

export const ListDataContainer = styled.div`
    margin: 2rem auto;
    width: 100%;
    border: 1px solid #655c56;
    height: 16rem;
    padding: 1rem;
    display: grid;
    flex-direction: column;
    justify-items: center;

    -webkit-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
`;
export const StyledParagraph = styled(Paragraph)`
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    border-radius: 5px;
    &:after {
        display: block;
        content: '';
        width: 1rem;
        height: 1rem;
        margin: 0.5rem auto;
        background-image: url(${scissorsIcon});
        background-size: cover;
    }
    &:after:hover {
        cursor: pointer;
    }
    &:hover,
    &:active {
        color: #a39891;
    }
    @media (min-width: 850px) {
        &:after {
            width: 2rem;
            height: 2rem;
        }
    }
`;
export const StyledSecondaryHeader = styled(SecondaryHeader)`
    text-align: center;
`;
export const StyledParagraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CopiedInformation = styled(Paragraph)`
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    border-radius: 5px;
`;
