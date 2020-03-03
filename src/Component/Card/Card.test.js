import React from 'react';
import {shallow} from 'enzyme';

import Card from './Card';


it('expect to render card component' ,() =>{
    const mockAllData = [];
    const mockProfileInfo = {
        thumbnail:"jeff",
        age:23,
        professions:["metalWorker"],
        friends:[ 'david','jose'],
        name: 'maria'
    }
    expect(shallow(<Card profileInfo={mockProfileInfo} allData={mockAllData}/>)).toMatchSnapshot();
})