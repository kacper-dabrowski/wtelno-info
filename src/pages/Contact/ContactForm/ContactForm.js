import React from 'react';
import {
    ContactFormContainer,
    StyledForm,
    StyledFormTitle,
    StyledInput,
    StyledLabel,
    StyledSubmitBtn,
    StyledTextarea,
} from '../../../components/Form/StyledForm';

const FORM_URL = 'https://formspree.io/mqkyprpe';

const contactForm = () => (
    <ContactFormContainer>
        <StyledForm method="POST" action={FORM_URL}>
            <StyledFormTitle>Formularz kontaktowy</StyledFormTitle>
            <StyledLabel htmlFor="email">Email nadawcy:</StyledLabel>
            <StyledInput required placeholder="Twój e-mail" type="email" name="sender" />
            <StyledLabel htmlFor="topic">Temat wiadomości:</StyledLabel>
            <StyledInput required placeholder="Temat " type="text" name="topic" />
            <StyledLabel htmlFor="content">Treść wiadomości:</StyledLabel>
            <StyledTextarea required name="content" placeholder="Treść" />
            <StyledSubmitBtn type="submit">Wyślij</StyledSubmitBtn>
        </StyledForm>
    </ContactFormContainer>
);

export default contactForm;
