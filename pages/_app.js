import React from 'react';
import Layout from '../src/containers/Layout';
import '../src/index.css';

function MyApp({Component,pageProps}) {
    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    );
}

export default MyApp;
