import React from 'react';
import { Footer } from './FooterStyles';
import FooterCredits from './FooterCredits/FooterCredits';
import coderImage from '../../../../public/assets/footer-images/programming.png';
import editorImage from '../../../../public/assets/footer-images/ink.png';

const footer = () => (
    <Footer>
        <FooterCredits name="Barbara Łabęcka" link="/kontakt" icon={editorImage} />
        <FooterCredits
            name="Kacper Dąbrowski"
            link="https://www.linkedin.com/in/kacper-d%C4%85browski/"
            icon={coderImage}
        />
    </Footer>
);

export default footer;
