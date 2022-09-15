import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ClipLoader } from 'react-spinners';
import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import { markdownConfig } from '../../shared/markdownConfig';
import websources from '../../shared/websources';
import useRequest from '../../shared/hooks/useRequest';

const Page = ({ pageName }) => {
    const [response, loading, error] = useRequest(`${websources.STRAPI_CMS_URL}/pages`, 'GET');

    const currentPage = response?.data?.find?.((page) => page.name === pageName);

    if (error) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }
    if (loading) {
        return (
            <Container>
                <ClipLoader size="100px" />
            </Container>
        );
    }
    return (
        <Container>
            <MainHeader>{currentPage.title}</MainHeader>
            <ReactMarkdown {...markdownConfig} source={currentPage.content} />
        </Container>
    );
};

export default Page;
