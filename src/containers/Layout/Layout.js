import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../../components/UI/Navbar';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer';
import ScrollToTopBtn from '../../components/UI/Navbar/ScrollToTopBtn/ScrollToTopBtn';
import { ChildrenWrapper } from './LayoutStyles';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter()
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
