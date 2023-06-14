import styled from 'styled-components';
import React from 'react';
import { headersConfig } from '../../shared/headers/headers';
import { withHeaders } from '../../hoc/withHeaders';

const StyledNotFound = styled.div`
    color: #655c56;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    width: 100%;
`;

const NotFound = () => (
    <StyledNotFound>
        <h1>Strona o podanym adresie nie istnieje.</h1>
    </StyledNotFound>
);

export default withHeaders(NotFound, headersConfig.notFound.main);
