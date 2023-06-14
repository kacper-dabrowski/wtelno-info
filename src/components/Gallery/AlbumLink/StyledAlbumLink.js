import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAlbumLinkContainer = styled.div`
    border: 2px solid #655c56;
    margin: 1rem 1rem;
    @media (max-width: 800px) {
        border: none;
    }
`;
export const StyledAlbumLink = styled(Link)`
    display: flex;
    width: 20rem;
    height: 10rem;
    margin: 2rem auto;
    background-image: url(${({ headerphoto }) => headerphoto});
    background-size: cover;
    background-position: center;
    transition: ease-in-out 0.2s;
    -webkit-box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0 rgba (0, 0, 0, 0.75);
    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledAlbumTitle = styled.h3`
    text-align: center;
    color: #655c56;
    max-width: 100%;
    align-self: center;
    height: auto;
    width: auto;
    font-weight: bolder;
    font-size: 1rem;
    padding: 2rem;
    @media (min-width: 850px) {
        font-size: 1.4rem;
    }
`;
