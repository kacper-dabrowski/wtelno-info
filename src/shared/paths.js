const paths = {
    main: {
        wtelno: '/',
        school: '/szkola',
        government: '/wladze',
    },
    church: {
        churchInfo: '/parafia',
        churchGallery: '/parafia/galeria-parafialna',
        churchAnnouncements: '/parafia/ogloszenia',
        churchTerms: '/parafia/regulamin-cmentarza',
    },
    history: '/historia',
    news: '/aktualnosci',
    gallery: '/galeria',
    contact: '/kontakt',
    notFound: '/nie-znaleziono-strony',
};
export const recognizePath = (pathname) => window.location.pathname.includes(pathname);
export default paths;
