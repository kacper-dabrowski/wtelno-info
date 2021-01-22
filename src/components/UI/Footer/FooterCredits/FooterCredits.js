import React from 'react';
import { CreditsIcon } from './StyledFooterCredits';

const FooterCredits = ({ icon, name, link }) => (
    <CreditsIcon icon={icon} target="__blank" href={link} personName={name} />
);
export default FooterCredits;
