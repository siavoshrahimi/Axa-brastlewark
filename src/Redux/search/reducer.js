import SearchType from "./searchType";

import {searchInProfession,getAllProfessionArray} from "./searchUtils";

const INITIAL_STATE = {
    searchResult: [],
    allProfession: []
}

const searchReducer = (state= INITIAL_STATE,action) =>{
    switch (action.type) {
        case SearchType.SEARCH_BY_PROFESSION:
            return{
                ...state,
                searchResult:searchInProfession(action.payload.genomeData,action.payload.searchedValue)
            }
        case SearchType.GET_ALL_PROFESSIONS:
            return {
                ...state,
                allProfession: getAllProfessionArray(action.payload)
            }
        default:
            return state
    }
}

export default searchReducer;

