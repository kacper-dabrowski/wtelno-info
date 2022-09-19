import React from 'react';
import { MarkdownParser } from '../../shared/markdownConfig';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';

export const Page = ({ currentPage }) => {
    return (
        <Container>
            <MainHeader>{currentPage.title}</MainHeader>
            <MarkdownParser>{currentPage.content}</MarkdownParser>
        </Container>
    );
};
