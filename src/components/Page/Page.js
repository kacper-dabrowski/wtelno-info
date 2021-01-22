import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

import { Container, MainHeader } from '../UniversalStyles/ArticleStyles';
import markdownConfig from '../../shared/markdownConfig';
import websources from '../../shared/websources';

const Page = ({ pageName }) => {
    const [pageData, setPageData] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const strapiContent = await axios.get(`${websources.STRAPI_CMS_URL}/pages`);
                const pages = strapiContent.data;
                const thisPage = pages.find((page) => page.name === pageName);

                setPageData(thisPage);
            } catch (error) {
                setHasError(true);
            }
        };
        fetchPageData();
    }, [pageName]);

    if (hasError) {
        return (
            <Container>
                <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
            </Container>
        );
    }
    if (!pageData) {
        return (
            <Container>
                <ClipLoader size="100px" />
            </Container>
        );
    }
    return (
        <Container>
            <MainHeader>{pageData.title}</MainHeader>
            <ReactMarkdown {...markdownConfig} source={pageData.content} />
        </Container>
    );
};

export default Page;
