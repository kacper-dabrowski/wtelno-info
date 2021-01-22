import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import {
    StyledParagraph,
    StyledSecondaryHeader,
    StyledParagraphWrapper,
    ListDataContainer,
    CopiedInformation,
} from './ListDataStyles';

const ListData = ({ value, valueName }) => {
    const [isCopied, setIsCopied] = useState(false);

    const stringToClipboard = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    const displayedParagraph = isCopied ? (
        <CopiedInformation>Skopiowano do schowka</CopiedInformation>
    ) : (
        <StyledParagraphWrapper>
            <CopyToClipboard text={value} onCopy={stringToClipboard}>
                <StyledParagraph>{value}</StyledParagraph>
            </CopyToClipboard>
        </StyledParagraphWrapper>
    );
    return (
        <ListDataContainer>
            <StyledSecondaryHeader>{valueName}</StyledSecondaryHeader>
            {displayedParagraph}
        </ListDataContainer>
    );
};
export default ListData;
