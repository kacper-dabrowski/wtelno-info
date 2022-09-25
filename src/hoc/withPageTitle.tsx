import Head from 'next/head';
import React from 'react';
import { headersConfig } from '../shared/headers/headers';

export const withPageTitle = (
    WrappedPage: React.ComponentType,
    { title, description }: { title?: string; description?: string } = headersConfig.government.main
): React.FC => {
    return function wrappedComponent() {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <meta name="description" content={description} />
                <WrappedPage />
            </>
        );
    };
};
