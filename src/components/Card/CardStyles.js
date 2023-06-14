import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 2rem auto;

    width: 100%;
    padding: 1rem;
    border: 1px solid #655c56;
    -webkit-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 37px 0px rgba(0, 0, 0, 0.75);
`;
export const Name = styled.h3`
    text-align: center;
    padding: 0.5rem;
`;
export const Title = styled.h4`
    text-align: center;
    color: #655c56;
    font-weight: bolder;
`;
export const AddressData = styled.ul`
    list-style: none;
    padding: 0.5rem;
    li {
        padding: 0.25rem;
        text-align: center;
    }
`;
export const PeopleList = styled.ul`
    list-style: none;
`;
export const OrganizationName = styled.h3`
    text-align: center;
    padding: 0.5rem;
    font-size: 1.3rem;
    color: #655c56;
    font-weight: bolder;
`;
export const Centered = styled.div`
    text-align: center;
    margin: 0 auto;
`;
export const PersonPhoto = styled.div`
    display: block;
    text-align: center;
    margin: 1rem auto;
    width: 6.25rem;
    height: 9rem;
    background-size: cover;
    background-position: center;
    background-image: url(${({ photo }) => photo});
`;
export const PersonDataImage = styled.img`
    max-width: 200px;
    max-height: 15px;
`;
