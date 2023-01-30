import React from 'react';
import NavBtn from '../NavBtn';
import { paths } from '../../../../shared/paths';

const navbarItems = ({ toggleSidedrawer }) => {
    const dropdownLinks = {
        church: [
            {
                title: 'Ogłoszenia parafialne',
                path: paths.church.churchAnnouncements,
            },
            {
                title: 'Galeria parafialna',
                path: paths.church.churchGallery,
            },
            { title: 'Regulamin cmentarza', path: paths.church.churchTerms },
        ],
    };

    return (
        <>
            <NavBtn
                btnTitle="Wtelno"
                btnPath={paths.main.wtelno}
                dropdownLinks={dropdownLinks.main}
                clicked={toggleSidedrawer}
            />
            <NavBtn
                btnTitle="Parafia"
                btnPath={paths.church.churchInfo}
                dropdownLinks={dropdownLinks.church}
                clicked={toggleSidedrawer}
            />
            <NavBtn btnTitle="Historia" btnPath={paths.history} clicked={toggleSidedrawer} />
            <NavBtn btnTitle="Aktualności" btnPath={paths.news} clicked={toggleSidedrawer} />
            <NavBtn btnTitle="Galeria" btnPath={paths.gallery} clicked={toggleSidedrawer} />
            <NavBtn btnTitle="Kontakt" btnPath={paths.contact} clicked={toggleSidedrawer} />
        </>
    );
};

export default navbarItems;
