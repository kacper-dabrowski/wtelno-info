import React from 'react';
import arrowUp from '../../../../../public/assets/util-images/up-arrow.png';
import { StyledScrollToTopBtn } from './StyledScrollToTopBtn';

const ScrollToTopBtn = ({ clicked, scrollPosition }) => (
    <StyledScrollToTopBtn onClick={clicked} scrollPosition={scrollPosition}>
        <img src={arrowUp} alt="Przewiń na samą górę" />
    </StyledScrollToTopBtn>
);
export default ScrollToTopBtn;
