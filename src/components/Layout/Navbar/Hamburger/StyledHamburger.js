import styled from 'styled-components';

export const Hamburger = styled.div`
    padding: 15px 15px;
    display: none;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:hover {
        opacity: 0.7;
    }
    @media (max-width: 850px) {
        & {
            display: inline-block;
        }
    }
`;
export const HamburgerInner = styled.div`
    display: block;
    top: 50%;
    margin-top: -2px;
    &,
    &::before,
    &::after {
        width: 40px;
        height: 4px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }
    &::before,
    &::after {
        content: '';
        display: block;
    }
    &::before {
        top: -10px;
    }
    &::after {
        bottom: -10px;
    }
`;
export const HamburgerBox = styled.div`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`;
