import { shallow } from 'enzyme';
import React from 'react';
import { PersonPhoto } from '../CardStyles';
import HistoryCard from './HistoryCard';
import '../../../setupTests';

describe('<HistoryCard/>', () => {
    it('should render HistoryCard component without a photo if not provided', () => {
        const wrapper = shallow(<HistoryCard />);

        expect(wrapper.find(PersonPhoto)).toHaveLength(0);
    });

    it('should render HistoryCard component with a photo if provided', () => {
        const wrapper = shallow(<HistoryCard photo="anySource" />);

        expect(wrapper.find(PersonPhoto)).toHaveLength(1);
    });
});
