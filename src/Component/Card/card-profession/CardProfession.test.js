import React from 'react';
import {shallow} from 'enzyme';

import CardProfession from './cardProfesion';


it('expect to render card detail component' ,() =>{
    expect(shallow(<CardProfession />)).toMatchSnapshot();
})