import axios from 'axios';
import GenomesDataActionType from "./genomesDataActionType";
import {getAllProfessions} from "../search/action";

export const fetchGenomesStart = () =>({
    type:GenomesDataActionType.FETCH_GENOMES_DATA_START,
});

export const fetchGenomesSuccess = data =>({
    type:GenomesDataActionType.FETCH_GENOMES_DATA_SUCCESS,
    payload:data
});

export const fetchGenomesDataFailure = error =>({
    type:GenomesDataActionType.FETCH_GENOMES_DATA_FAILURE,
    payload:error
});

export const fetchGenomesStartAsync = () =>{
    return dispatch =>{
        dispatch(fetchGenomesStart());
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then(res =>{
                dispatch(fetchGenomesSuccess(res.data.Brastlewark));
                dispatch(getAllProfessions(res.data.Brastlewark));
            })
            .catch(err => {
                dispatch(fetchGenomesDataFailure(err));
            })
    }
}