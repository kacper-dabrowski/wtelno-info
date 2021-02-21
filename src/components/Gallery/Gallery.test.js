import { mount, shallow } from 'enzyme';
import React from 'react';
import useRequest from '../../shared/hooks/useRequest';
import { MainHeader } from '../UniversalStyles/ArticleStyles';
import Gallery from './Gallery';
import '../../setupTests';
import { CenteredSpinner } from './StyledGallery';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';

jest.mock('../../shared/hooks/useRequest');

function withFailedRequest() {
    useRequest.mockImplementation(() => [false, false, true]);
}
function withSuccessfulRequest(expectedResponse) {
    useRequest.mockImplementation(() => [expectedResponse, false, false]);
}

function withLoadingRequest() {
    useRequest.mockImplementation(() => [false, true, false]);
}

describe('<Gallery/>', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return error if loading fails', () => {
        withFailedRequest();
        const wrapper = mount(<Gallery fetchUrl="" />);

        expect(wrapper.find(MainHeader).text()).toEqual('Coś poszło nie tak przy ładowaniu strony...');
    });

    it('should render loading spinner if gallery is loading', () => {
        withLoadingRequest();
        const wrapper = mount(<Gallery fetchUrl="" />);

        expect(wrapper.find(MainHeader).text()).toEqual('Dostępne galerie:');
        expect(wrapper.find(CenteredSpinner)).toHaveLength(1);
    });

    it('should render a header for an empty gallery', () => {
        const expectedResponse = { data: [] };
        withSuccessfulRequest(expectedResponse);
        const wrapper = mount(<Gallery fetchUrl="" />);

        expect(wrapper.find(MainHeader).text()).toEqual('Galeria świeci pustkami...');
    });

    // it('should render valid routes for response with albums', () => {
    //     const expectedResponse = {
    //         data: [
    //             {
    //                 _id: 'dummy_id',
    //                 id: 'dummyid',
    //                 media: [{ formats: { thumbnail: { url: 'url' } } }],
    //                 title: 'dummytitle',
    //             },
    //         ],
    //     };
    //     withSuccessfulRequest(expectedResponse);
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/base']}>
    //             <Gallery fetchUrl="/fetch" baseUrl="/base" mediaUrl="/media" />
    //         </MemoryRouter>
    //     );

    //     expect(wrapper.find(Switch).childAt(1)).toEqual('/base');
    // });
});
