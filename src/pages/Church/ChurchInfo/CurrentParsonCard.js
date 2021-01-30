import React from 'react';
import PersonCard from '../../../components/Card/PersonCard';
import { CenteredSpinner } from '../../../components/Gallery/StyledGallery';
import useRequest from '../../../shared/hooks/useRequest';
import websources from '../../../shared/websources';

const CurrentParsonCard = ({ parsonData }) => {
    const [parsonEmailImage, parsonEmailImageLoading, parsonEmailImageError] = useRequest(
        websources.PHOTOS_API_URL,
        'POST',
        { text: parsonData.email }
    );
    const [parsonPhoneImage, parsonPhoneImageLoading, parsonPhoneImageError] = useRequest(
        websources.PHOTOS_API_URL,
        'POST',
        { text: parsonData.telephoneNumber }
    );

    const errorArray = [parsonEmailImageError, parsonPhoneImageError];
    const hasError = errorArray.some((error) => error);
    if (hasError) {
        return <p>Wystąpił błąd podczas ładowania danych proboszcza.</p>;
    }

    const loadingArray = [parsonEmailImageLoading, parsonPhoneImageLoading];
    const isLoading = loadingArray.some((loading) => loading);

    if (isLoading) {
        return <CenteredSpinner />;
    }

    const convertedParsonData = {
        ...parsonData,
        email: `data:image/jpeg;charset=utf-8;base64,${parsonEmailImage.data.photo}`,
        telephoneNumber: `data:image/jpeg;charset=utf-8;base64,${parsonPhoneImage.data.photo}`,
    };

    return <PersonCard {...convertedParsonData} />;
};

export default React.memo(CurrentParsonCard, (prevProps, nextProps) => console.log(prevProps, '<>', nextProps));
