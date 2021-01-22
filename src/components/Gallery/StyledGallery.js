import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

export const StyledTileContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    @media (min-width: 850px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
export const CenteredSpinner = styled(ClipLoader)`
    text-align: center;
    display: inline;
    margin: auto;
`;
