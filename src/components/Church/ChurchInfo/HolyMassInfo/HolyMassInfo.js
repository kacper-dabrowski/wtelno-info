import React from 'react';
import { ChurchInfoShadowedContainer, ChurchInfoHighlight } from '../ChurchInfoStyles';
import { ArticleListCentered } from '../../../UniversalStyles/ArticleStyles';

const HolyMassInfo = ({ massesPlan }) => {
    const sundayPlan = massesPlan.sunday.map((hms) => <li key={hms._id}>{hms.hour}</li>);
    const excludedPlan = massesPlan.excluded.map((hms) => <li key={hms._id}>{hms.hour}</li>);
    const normalPlan = massesPlan.normal.map((hms) => <li key={hms._id}>{hms.hour}</li>);
    return (
        <>
            <ChurchInfoShadowedContainer>
                <ChurchInfoHighlight>Niedziela i święta</ChurchInfoHighlight>
                <ArticleListCentered>{sundayPlan}</ArticleListCentered>
            </ChurchInfoShadowedContainer>
            <ChurchInfoShadowedContainer>
                <ChurchInfoHighlight>Zniesione w święta</ChurchInfoHighlight>
                <ArticleListCentered>{excludedPlan}</ArticleListCentered>
            </ChurchInfoShadowedContainer>
            <ChurchInfoShadowedContainer>
                <ChurchInfoHighlight>Dni powszednie</ChurchInfoHighlight>
                <ArticleListCentered>{normalPlan}</ArticleListCentered>
            </ChurchInfoShadowedContainer>
        </>
    );
};

export default HolyMassInfo;
