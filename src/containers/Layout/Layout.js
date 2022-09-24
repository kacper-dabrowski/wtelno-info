import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Layout/Navbar';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer';
import ScrollToTopBtn from '../../components/Layout/Navbar/ScrollToTopBtn/ScrollToTopBtn';
import { ChildrenWrapper } from './LayoutStyles';

const Layout = ({ children }) => {
    const router = useRouter();
    const [showScrollArrow, setScrollArrow] = useState(false);

    const scrollToTop = useCallback(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const updateScrollPosition = useCallback(() => {
        setScrollArrow(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition);
        return () => {
            window.removeEventListener('scroll', updateScrollPosition);
        };
    }, [updateScrollPosition]);

    return (
        <>
            <Navbar />
            <Header location={router.pathname} />
            <ChildrenWrapper>{children}</ChildrenWrapper>
            <ScrollToTopBtn clicked={scrollToTop} scrollPosition={showScrollArrow} />
            <Footer />
        </>
    );
};

export default Layout;
