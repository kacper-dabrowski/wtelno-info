import { mount } from 'enzyme';
import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { MemoryRouter } from 'react-router-dom';
import paths from '../../../shared/paths';
import Header from './Header';
import '../../../setupTests';

function mountHeaderWithMemoryRouter(path) {
    return mount(
        <MemoryRouter initialEntries={[path]}>
            <Header />
        </MemoryRouter>
    );
}

function mockIntersectionObserver() {
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
        observe: () => {},
    }));
}

describe('<Header/>', () => {
    beforeEach(() => {
        mockIntersectionObserver();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render default background image, when paths are not met, or if on main page', () => {
        const mainPageWrapper = mountHeaderWithMemoryRouter(paths.main.wtelno);
        const fallbackWrapper = mountHeaderWithMemoryRouter('/unmet');

        expect(mainPageWrapper.find(ProgressiveImage).props().src).toEqual('main.jpg');
        expect(fallbackWrapper.find(ProgressiveImage).props().src).toEqual('main.jpg');
    });

    it('should render valid church background image if on one of church pages', () => {
        const churchPaths = { ...paths.church };
        const churchInfoWrapper = mountHeaderWithMemoryRouter(churchPaths.churchInfo);
        const churchTermsWrapper = mountHeaderWithMemoryRouter(churchPaths.churchTerms);
        const churchGalleryWrapper = mountHeaderWithMemoryRouter(churchPaths.churchGallery);
        const churchAnnouncementsWrapper = mountHeaderWithMemoryRouter(churchPaths.churchAnnouncements);

        const wrappers = [churchInfoWrapper, churchTermsWrapper, churchGalleryWrapper, churchAnnouncementsWrapper];

        wrappers.forEach((wrapper) => {
            expect(wrapper.find(ProgressiveImage).props().src).toEqual('church.jpg');
        });
    });

    it('should render valid school background image when on school page', () => {
        const schoolWrapper = mountHeaderWithMemoryRouter(paths.main.school);

        expect(schoolWrapper.find(ProgressiveImage).props().src).toEqual('school.jpg');
    });

    it('should render valid government background image when on government page', () => {
        const governmentWrapper = mountHeaderWithMemoryRouter(paths.main.government);

        expect(governmentWrapper.find(ProgressiveImage).props().src).toEqual('government.jpg');
    });
});
