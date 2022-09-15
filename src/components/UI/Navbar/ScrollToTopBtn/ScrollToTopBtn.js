import React from 'react';
import arrowUp from '../../../../../public/static/util-images/up-arrow.png';
import { StyledScrollToTopBtn } from './StyledScrollToTopBtn';

const ScrollToTopBtn = ({ clicked, scrollPosition }) => (
    <StyledScrollToTopBtn onClick={clicked} scrollPosition={scrollPosition}>
        <img src={'/static/util-images/up-arrow.png'} alt="Przewiń na samą górę" />
    </StyledScrollToTopBtn>
);
export default ScrollToTopBtn;
