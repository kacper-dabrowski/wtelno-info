import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import { markdownConfig } from '../../shared/markdownConfig';

export const Page = ({ currentPage }) => {
    return (
        <Container>
            <MainHeader>{currentPage.title}</MainHeader>
            <ReactMarkdown {...markdownConfig} source={currentPage.content} />
        </Container>
    );
};
