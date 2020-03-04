import GenomesDataActionType from "./genomesDataActionType";

import {fetchGenomesStartAsync,fetchGenomesSuccess} from "./action";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

const mockStore = configureMockStore([thunk]);

it('handles when request is success', () =>{
    const response = {name:'Nik', lastName:'niki'}
    const expectedAction = {
        type:GenomesDataActionType.FETCH_GENOMES_DATA_SUCCESS,
        payload:response
    }
    expect(fetchGenomesSuccess(response)).toEqual(expectedAction);
})
it('handles API requesting', () =>{
    const store = mockStore();
    store.dispatch(fetchGenomesStartAsync());
    const action = store.getActions();
    const expectedAction = {
        type: GenomesDataActionType.FETCH_GENOMES_DATA_START
    }
    expect(action[0]).toEqual(expectedAction)
})


it('should get data when fetch is succeed', () => {
    const store = mockStore();
    mock.onGet('/genomes').reply(200, {
        data: [{ id: 1, name: 'John Smith' }]
    });

    store.dispatch(fetchGenomesStartAsync()).then(() => {
        let expectedActions = [
            {type:GenomesDataActionType.FETCH_GENOMES_DATA_START},
            {type: GenomesDataActionType.FETCH_GENOMES_DATA_SUCCESS,
            payload: {
                data: [{ id: 1, name: 'John Smith' }]
            }
        }]
        expect(store.getActions()).toEqual(expectedActions);
    });
});
