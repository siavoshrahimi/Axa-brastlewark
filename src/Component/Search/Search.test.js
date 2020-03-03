import React from 'react';
import {Provider} from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import Search from './Search';

const mockStore = configureMockStore([thunk]);

it('expected to render Search component', () => {
    const store = mockStore({
        search: { allProfession: [''] }
    });
    const wrapper = shallow(
        <Provider store={store}>
            <Search />
        </Provider>
    )
    expect(wrapper).toMatchSnapshot()
})

