import React from 'react';
import { withRouter } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import { HeaderContainer, HeaderParagraph, HeaderTitle } from './HeaderStyles';
import mainBg from '../../../assets/header-images/high-quality/main.jpg';
import mainBgPlaceholder from '../../../assets/header-images/low-quality/main.jpg';
import churchBg from '../../../assets/header-images/high-quality/church.jpg';
import churchBgPlaceholder from '../../../assets/header-images/low-quality/church.jpg';
import schoolBg from '../../../assets/header-images/high-quality/school.jpg';
import schoolBgPlaceholder from '../../../assets/header-images/low-quality/school.jpg';
import governmentBg from '../../../assets/header-images/high-quality/government.jpg';
import governmentBgPlaceholder from '../../../assets/header-images/low-quality/government.jpg';
import fbLogo from '../../../assets/facebook.png';
import cameraLogo from '../../../assets/ar-camera.png';
import pinLogo from '../../../assets/pin.png';
import { HeaderIcon } from './HeaderIconContainer/HeaderIcon/HeaderIcon';
import { HeaderIconContainer } from './HeaderIconContainer/HeaderIconContainer';
import paths from '../../../shared/paths';

const Header = ({ location }) => {
    let headerBgPosition;
    let headerBg;
    let headerBgPlaceholder;

    switch (location.pathname) {
        default: {
            headerBg = mainBg;
            headerBgPlaceholder = mainBgPlaceholder;
            headerBgPosition = 'cover';
            break;
        }
        case paths.church.churchGallery:
        case paths.church.churchAnnouncements:
        case paths.church.churchInfo:
        case paths.church.churchTerms: {
            headerBg = churchBg;
            headerBgPlaceholder = churchBgPlaceholder;
            headerBgPosition = '50% 0';
            break;
        }
        case paths.main.school: {
            headerBg = schoolBg;
            headerBgPlaceholder = schoolBgPlaceholder;
            headerBgPosition = '50% 50%';
            break;
        }
        case paths.main.government: {
            headerBg = governmentBg;
            headerBgPlaceholder = governmentBgPlaceholder;
            headerBgPosition = '50% 60%';
        }
    }

    return (
        <ProgressiveImage src={headerBg} placeholder={headerBgPlaceholder}>
            {(src) => (
                <HeaderContainer bgPhoto={src} position={headerBgPosition}>
                    <div>
                        <HeaderTitle>Wtelno</HeaderTitle>
                        <HeaderParagraph>Oficjalna strona internetowa</HeaderParagraph>

                        <HeaderIconContainer>
                            <HeaderIcon
                                imgUrl={fbLogo}
                                tooltipContent="Nasza strona na facebooku"
                                href="https://www.facebook.com/wtelno.info"
                                target="_blank"
                            />
                            <HeaderIcon
                                tooltipContent="Powietrzny Kadr"
                                imgUrl={cameraLogo}
                                href="https://www.facebook.com/powietrznykadr"
                                target="_blank"
                            />
                            <HeaderIcon
                                tooltipContent="Lokalizacja wsi Wtelno"
                                imgUrl={pinLogo}
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

export default withRouter(Header);
