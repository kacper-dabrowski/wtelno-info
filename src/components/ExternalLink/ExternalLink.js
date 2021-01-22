import React from 'react';
import { StyledExternalLink } from './StyledExternalLink';

const ExternalLink = ({ children, ...restProps }) => <StyledExternalLink {...restProps}>{children}</StyledExternalLink>;

export default ExternalLink;
