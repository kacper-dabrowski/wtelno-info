import styled from 'styled-components';
import { SecondaryHeader } from '../../UniversalStyles/ArticleStyles';
import { ShadowedContainer } from '../../UniversalStyles';

export const StyledNewsThumbnail = styled(ShadowedContainer)`
    width: 80%;
    border: black solid 1px;
    padding: 1rem;
    margin: 2rem auto;
`;
export const PostThumbnailHeader = styled(SecondaryHeader)`
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
    @media (min-width: 850px) {
        font-size: 1.4rem;
    }
`;
export const StyledSubmitBtn = styled.button`
    margin: 1rem auto;
    display: block;
    width: 80%;
    border: 1px solid white;
    background-color: #655c56;
    color: white;
    font: inherit;
    padding: 1rem;
    transition: ease-in-out 0.2s;
    margin-top: 1rem;
    &:hover {
        background-color: white;
        color: #655c56;
        cursor: pointer;
        border: 1px solid #655c56;
    }
    @media (min-width: 850px) {
        width: 50%;
    }
`;
export const PostThumbnailDate = styled.p`
    font-weight: bold;
    color: #655c56;
    text-align: center;
    margin-bottom: 1rem;
`;
