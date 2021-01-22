import styled from 'styled-components';

export const StyledScrollToTopBtn = styled.div`
    opacity: ${({ scrollPosition }) => (scrollPosition ? '1' : '0')};
    pointer-events: ${({ scrollPosition }) => (scrollPosition ? 'auto' : 'none')};
    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    bottom: 2.6rem;
    right: 1rem;
    transition: all 0.4s ease-in-out;
    z-index: 1;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    & img {
        width: 100%;
        height: 100%;
    }
`;
