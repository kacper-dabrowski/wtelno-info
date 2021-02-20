import { shallow } from 'enzyme';
import React from 'react';
import OrganizationPerson from './OrganisationPerson';
import { Name, Title } from '../../CardStyles';
import '../../../../setupTests';

describe('<OrganisationPerson />', () => {
    it('should render Name only if title not provided', () => {
        const wrapper = shallow(<OrganizationPerson name="Dummy" />);

        expect(wrapper.find(Name)).toHaveLength(1);
        expect(wrapper.find(Title)).toHaveLength(0);
    });

    it('should render Name and Title if title is provided', () => {
        const wrapper = shallow(<OrganizationPerson name="Dummy" title="Title" />);

        expect(wrapper.find(Name)).toHaveLength(1);
        expect(wrapper.find(Title)).toHaveLength(1);
    });
});
