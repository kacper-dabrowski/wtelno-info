import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../src/containers/Layout';

function MyApp({Component,pageProps}) {
    return (
        <BrowserRouter>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </BrowserRouter>
    );
}

export default MyApp;
