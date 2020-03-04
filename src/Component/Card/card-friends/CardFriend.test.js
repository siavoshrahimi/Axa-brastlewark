import React from 'react';
import {shallow} from 'enzyme';

import CardFriends from './CardFriends';


it('expect to render card detail component' ,() =>{
    const mockFriends = {
        id:1,
        name:'david',
        thumbnail: "marc",
    }
    const wrapper = shallow(<CardFriends friend={mockFriends} />);
    expect(wrapper).toMatchSnapshot();
})