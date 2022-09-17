import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

export const StyledTileContainer = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 850px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
export const CenteredSpinner = styled(ClipLoader)`
    text-align: center;
    display: inline;
`;
