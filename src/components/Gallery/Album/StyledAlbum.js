import styled from 'styled-components';

export const AlbumContainer = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    & div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-bottom: 60px;
    }
    @media (min-width: 1000px) {
        width: 80%;
    }
`;
