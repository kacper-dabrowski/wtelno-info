import React from 'react';
import { Helmet } from 'react-helmet';

export const withHeaders = (WrappedPage, headerConfig) => {
    const { title, description } = headerConfig;
    return function () {
        return (
            <>
                <Helmet>
                    <title>Wtelno - {title}</title>
                    <meta name="description" content={description} />
                </Helmet>
                <WrappedPage />
            </>
        );
    };
};
