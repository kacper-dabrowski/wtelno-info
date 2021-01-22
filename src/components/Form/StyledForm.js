import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    width: 100%;
    margin: 1rem auto;
`;
export const StyledForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    -webkit-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    border: 1px solid #655c56;
    @media (min-width: 850px) {
        width: 60%;
        padding: 2rem;
    }
`;
export const StyledInput = styled.input`
    outline: 0;
    font: inherit;
    width: 60%;
    margin: 1rem auto;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #eee;
    border-radius: 0;
    &:focus {
        border-bottom: 2px solid #655c56;
    }
`;
export const StyledTextarea = styled.textarea`
    font: inherit;
    width: 60%;
    margin: 1rem auto;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #eee;
    border-radius: 0;
    min-height: 6rem;
    max-height: 18rem;
    resize: vertical;
    outline: 0;
    &:focus {
        border-bottom: 2px solid #655c56;
    }
`;
export const StyledSubmitBtn = styled.button`
    display: block;
    width: 40%;
    border: 1px solid white;
    background-color: #655c56;
    color: white;
    font: inherit;
    padding: 1rem;
    transition: ease-in-out 0.2s;
    margin-top: 1rem;
    &:hover {
        background-color: white;
        color: #655c56;
        cursor: pointer;
        border: 1px solid #655c56;
    }
    @media (min-width: 850px) {
        width: 20%;
    }
`;
export const StyledFormTitle = styled.h2`
    font-size: 1rem;
    margin: 0 auto 3rem auto;
    color: #655c56;
    @media (min-width: 850px) {
        font-size: 1.5rem;
    }
`;
export const StyledLabel = styled.label`
    color: #655c56;
    font-weight: bold;
    font-size: 1rem;
    @media (min-width: 850px) {
        font-size: 1rem;
    }
`;
