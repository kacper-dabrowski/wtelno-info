import styled from 'styled-components';
import { ShadowedContainer } from '../../../components/UniversalStyles/UniversalStyles';
import { Highlight } from '../../../components/UniversalStyles/ArticleStyles';

export const ChurchInfoShadowedContainer = styled(ShadowedContainer)`
    width: 100%;
    padding: 0.5rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    text-align: left;
`;
export const ChurchInfoHighlight = styled(Highlight)`
    text-align: center;
    margin: 1rem;
    font-size: 1.5rem;
`;
export const LightboxContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    & div {
        text-align: center;
        margin: auto;
    }

    @media (min-width: 850px) {
        flex-direction: row;
        justify-content: center;
    }
`;
