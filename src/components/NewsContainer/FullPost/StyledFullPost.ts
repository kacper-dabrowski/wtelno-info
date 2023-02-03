import styled from 'styled-components';
import { ShadowedContainer } from '../../UniversalStyles';
import { Highlight, MainHeader } from '../../UniversalStyles/ArticleStyles';

const calendarIcon = '/static/util-images/calendar.png';

export const PostContainer = styled(ShadowedContainer)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;
    align-items: center;
    margin: 1rem auto;
    @media (min-width: 850px) {
        padding: 2rem;
        width: 80%;

        & p {
            width: 80%;
            text-align: justify;
        }
    }
`;
export const PostHeader = styled(MainHeader)`
    text-align: center;
`;
export const PostDate = styled(Highlight)`
    text-align: center;
    margin: 1rem auto;
    vertical-align: middle;

    &::before {
        content: '';
        vertical-align: middle;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url(${calendarIcon});
        background-size: cover;
        margin-right: 1rem;
    }
`;
export const NewsLink = styled.a`
    text-decoration: none;
    color: #655c56;
    font-size: 1.2rem;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;
