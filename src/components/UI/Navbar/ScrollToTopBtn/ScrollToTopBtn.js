import React from 'react';

import { StyledScrollToTopBtn } from './StyledScrollToTopBtn';
import arrowUp from '../../../../assets/util-images/up-arrow.png';

const ScrollToTopBtn = ({ clicked, scrollPosition }) => (
    <StyledScrollToTopBtn onClick={clicked} scrollPosition={scrollPosition}>
        <img src={arrowUp} alt="Przewiń na samą górę" />
    </StyledScrollToTopBtn>
);
export default ScrollToTopBtn;
