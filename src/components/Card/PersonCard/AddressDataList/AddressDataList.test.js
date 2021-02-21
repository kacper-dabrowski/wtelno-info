import { mount } from 'enzyme';
import '../../../../setupTests';
import React from 'react';
import AddressDataList from './AddressDataList';

describe('<AddressDataList/> ->', () => {
    it('should render a full address with zipcode, if it is provided', () => {
        const address = { street: 'street', zipcode: 'ZIP' };
        const wrapper = mount(<AddressDataList address={address} />);

        expect(wrapper.find(AddressDataList).text().includes('street')).toEqual(true);
        expect(wrapper.find(AddressDataList).text().includes('ZIP')).toEqual(true);
    });

    it('should render a full address with place, if it is provided', () => {
        const address = { street: 'street', place: 'some place' };
        const wrapper = mount(<AddressDataList address={address} />);

        expect(wrapper.find(AddressDataList).text().includes('street')).toEqual(true);
        expect(wrapper.find(AddressDataList).text().includes('some place')).toEqual(true);
    });

    it('should render a telephone number image, if it is provided', () => {
        const telephoneNumber = 'telephone.jpg';
        const wrapper = mount(<AddressDataList telephoneNumber={telephoneNumber} />);
        const telephoneNumberSource = wrapper.find(AddressDataList).find('img').props().src;

        expect(telephoneNumberSource).toEqual(telephoneNumber);
    });

    it('should render an email address image, if it is provided', () => {
        const emailAddress = 'email.jpg';
        const wrapper = mount(<AddressDataList email={emailAddress} />);
        const emailAddressSource = wrapper.find(AddressDataList).find('img').props().src;

        expect(emailAddressSource).toEqual(emailAddress);
    });
});
