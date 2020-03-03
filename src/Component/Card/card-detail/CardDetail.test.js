import React from 'react';
import {shallow} from 'enzyme';

import CardDetail from './CardDetail';


it('expect to render card detail component' ,() =>{
    expect(shallow(<CardDetail />)).toMatchSnapshot();
})