import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Container, MainHeader, SecondaryHeader } from '../../components/UniversalStyles/ArticleStyles';
import Card from '../../components/Card/PersonCard';
import OrganizationCard from '../../components/Card/OrganizationCard';
import photoApiCall from '../../shared/utils/photoApi/photoApi';

import websources from '../../shared/websources';

class Government extends Component {
    state = {
        mayorData: null,
        governmentPeople: null,
        governorData: null,
        isLoadingFinished: false,
    };

    async componentDidMount() {
        try {
            const responseWithContent = await axios.all([
                axios.get(`${websources.STRAPI_CMS_URL}/mayor`),
                axios.get(`${websources.STRAPI_CMS_URL}/governor`),
                axios.get(`${websources.STRAPI_CMS_URL}/government-member`),
            ]);
            const [mayorDataRequest, governorDataRequest, governmentPeopleRequest] = responseWithContent;
            const convertedData = await Promise.all([
                photoApiCall(mayorDataRequest.data.telephoneNumber),
                photoApiCall(mayorDataRequest.data.email),
                photoApiCall(governorDataRequest.data.telephoneNumber),
            ]);

            const [mayorTelephonePhoto, mayorMailPhoto, governorTelephonePhoto] = convertedData;

            this.setState({
                mayorData: {
                    ...mayorDataRequest.data,
                    telephoneNumber: `${mayorTelephonePhoto}`,
                    email: `${mayorMailPhoto}`,
                },
                governorData: {
                    ...governorDataRequest.data,
                    telephoneNumber: `${governorTelephonePhoto}`,
                },
                governmentPeople: governmentPeopleRequest.data.government,
                isLoadingFinished: true,
            });
        } catch (error) {
            this.setState({ hasError: true });
        }
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <Container>
                    <MainHeader>Coś poszło nie tak przy ładowaniu strony...</MainHeader>
                </Container>
            );
        }
        if (!this.state.isLoadingFinished) {
            return (
                <Container>
                    <ClipLoader size="100px" />
                </Container>
            );
        }
        return (
            <Container>
                <MainHeader>Władze</MainHeader>
                <SecondaryHeader>Informacje administracyjne wsi Wtelno.</SecondaryHeader>
                <Card {...this.state.governorData} />

                <OrganizationCard name="Rada Sołecka" people={this.state.governmentPeople} />
                <Card {...this.state.mayorData} />
            </Container>
        );
    }
}
export default Government;
