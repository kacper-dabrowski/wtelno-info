import React from 'react';
import  * as Styled from './FooterStyles';
import FooterCredits from './FooterCredits/FooterCredits';
const coderImage = '/static/footer-images/programming.png';
const editorImage = '/static/footer-images/ink.png';



const Footer = () => (
    <Styled.Footer>
        <FooterCredits name="Barbara Łabęcka" link="/kontakt" icon={editorImage} />
        <FooterCredits
            name="Kacper Dąbrowski"
            link="https://www.linkedin.com/in/kacper-d%C4%85browski/"
            icon={coderImage}
        />
    </Styled.Footer>
);

export default Footer;
