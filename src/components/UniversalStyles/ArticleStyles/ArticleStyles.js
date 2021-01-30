import styled from 'styled-components';
import React from 'react';
import websources from '../../../shared/websources';

export const Container = styled.div`
    & {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;

        padding: 1rem;
    }
    @media (min-width: 850px) {
        & {
            width: 60%;
        }
    }
`;

export const Paragraph = styled.p`
    width: 100%;
    font-size: 1rem;
    text-align: justify;
    padding: 0.5rem;
    margin: 0.5rem auto;
    text-transform: none;
    @media (min-width: 850px) {
        font-size: 1.3rem;
    }
`;
export const MainHeader = styled.h2`
    text-align: center;
    color: #655c56;
    font-weight: bolder;
    padding: 1rem;
    font-size: 2rem;
    @media (min-width: 850px) {
        font-size: 2.5rem;
    }
`;
export const SecondaryHeader = styled.h3`
    text-align: center;
    color: #655c56;
    max-width: 100%;
    height: auto;
    width: auto;
    font-weight: bolder;
    font-size: 1.4rem;
    padding: 2rem;
    @media (min-width: 850px) {
        font-size: 1.3rem;
    }
`;
export const Highlight = styled.span`
    color: #655c56;
    font-weight: bold;
`;
export const ArticleList = styled.ul`
    & {
        list-style: disc inside;
        width: 100%;
    }
    li {
        padding: 0.5rem;
    }
    @media (min-width: 850px) {
        font-size: 1.3rem;
    }
`;

export const ArticleListCentered = styled(ArticleList)`
    display: flex;
    flex-direction: column;
    list-style: none !important;
    text-align: center;
`;
export const KeyValueList = styled(ArticleList)`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none !important;
    text-align: center;
    align-content: center;

    li {
        width: 100%;
        height: 5rem;
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0.5rem auto;
        padding: 1rem;
        text-align: right;
        align-items: center;
        border: #655c56 solid 2px;
        span {
            text-align: left;
        }
        @media (min-width: 850px) {
            li {
                font-size: 1.3rem;
            }
        }
    }
`;
export const StyledArticleImage = styled.img`
    display: block;
    margin: 1rem auto;
    max-width: 50%;
    height: auto;
    width: 50%;
`;

export const ArticleImage = (props) => {
    return <StyledArticleImage {...props} src={`${websources.STRAPI_CMS_URL}${props.src}`} />;
};
