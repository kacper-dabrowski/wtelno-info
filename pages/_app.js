import Head from 'next/head';
import React from 'react';
import Layout from '../src/containers/Layout';
import '../src/index.css';
import { useGoogleAnalytics } from '../src/analytics/hooks/useGoogleAnalytics';
import { noop } from '../src/shared/noop';

function MyApp({ Component, pageProps }) {
    const injectSnippet = useGoogleAnalytics();

    return (
        <Layout>
            <Head>{typeof injectSnippet === 'function' ? injectSnippet() : noop()}</Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
