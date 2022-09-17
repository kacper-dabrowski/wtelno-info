import styled from 'styled-components';
import { ShadowedContainer } from '../../../components/UniversalStyles';

const calendarIcon = '/static/util-images/calendar.png';

export const AnnouncementContainer = styled(ShadowedContainer)`
    width: 100%;
    padding: 2rem;
    margin: 2rem auto;
`;
export const AnnouncementDate = styled.p`
    font-weight: bold;
    margin: auto;
    color: #655c56;
    text-align: center;
    &::before {
        content: '';
        vertical-align: middle;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url(${calendarIcon});
        background-size: cover;
        margin-right: 1rem;
    }
`;
