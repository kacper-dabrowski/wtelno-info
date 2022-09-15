import React, { useMemo } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import paths from '../../../shared/paths';
import { HeaderIcon } from './HeaderIconContainer/HeaderIcon/HeaderIcon';
import { HeaderIconContainer } from './HeaderIconContainer/HeaderIconContainer';
import { HeaderContainer, HeaderParagraph, HeaderTitle } from './HeaderStyles';

const churchBgPath = '/static/header-images/high-quality/church.jpg';
const governmentBgPath = '/static/header-images/high-quality/government.jpg';
const mainBgPath = '/static/header-images/high-quality/main.jpg';
const schoolBgPath = '/static/header-images/high-quality/school.jpg';
const churchBgPlaceholderPath = '/static/header-images/low-quality/church.jpg';
const governmentBgPlaceholderPath = '/static/header-images/low-quality/government.jpg';
const mainBgPlaceholderPath = '/static/header-images/low-quality/main.jpg';
const schoolBgPlaceholderPath = '/static/header-images/low-quality/school.jpg';

const Header = ({ location }) => {
    const { headerBg, headerBgPlaceholder, headerBgPosition } = useMemo(
        () => getImagePropsBasedOnLocation(location),
        [location]
    );

    return (
        <ProgressiveImage src={headerBg} placeholder={headerBgPlaceholder}>
            {(src) => (
                <HeaderContainer bgPhoto={src} position={headerBgPosition}>
                    <div>
                        <HeaderTitle>Wtelno</HeaderTitle>
                        <HeaderParagraph>Oficjalna strona internetowa</HeaderParagraph>

                        <HeaderIconContainer>
                            <HeaderIcon
                                imgUrl="/static/facebook.png"
                                tooltipContent="Nasza strona na facebooku"
                                href="https://www.facebook.com/wtelno.info"
                                target="_blank"
                            />
                            <HeaderIcon
                                tooltipContent="Powietrzny Kadr"
                                imgUrl="/static/ar-camera.png"
                                href="https://www.facebook.com/powietrznykadr"
                                target="_blank"
                            />
                            <HeaderIcon
                                tooltipContent="Lokalizacja wsi Wtelno"
                                imgUrl="/static/pin.png"
                                href="https://www.google.com/maps/place/86-011+Wtelno,+Poland/@53.2382118,17.8823626,14z/data=!3m1!4b1!4m5!3m4!1s0x47030f6d8ede1a59:0x720e28b7354a6156!8m2!3d53.2382136!4d17.8998722"
                                target="_blank"
                            />
                        </HeaderIconContainer>
                    </div>
                </HeaderContainer>
            )}
        </ProgressiveImage>
    );
};

function getImagePropsBasedOnLocation(location) {
    let headerBgPosition;
    let headerBg;
    let headerBgPlaceholder;

    switch (location) {
        default: {
            headerBg = mainBgPath;
            headerBgPlaceholder = mainBgPlaceholderPath;
            headerBgPosition = 'cover';
            break;
        }
        case paths.church.churchGallery:
        case paths.church.churchAnnouncements:
        case paths.church.churchInfo:
        case paths.church.churchTerms: {
            headerBg = churchBgPath;
            headerBgPlaceholder = churchBgPlaceholderPath;
            headerBgPosition = '50% 0';
            break;
        }
        case paths.main.school: {
            headerBg = schoolBgPath;
            headerBgPlaceholder = schoolBgPlaceholderPath;
            headerBgPosition = '50% 50%';
            break;
        }
        case paths.main.government: {
            headerBg = governmentBgPath;
            headerBgPlaceholder = governmentBgPlaceholderPath;
            headerBgPosition = '50% 60%';
        }
    }

    return { headerBg, headerBgPlaceholder, headerBgPosition };
}

export default Header;
