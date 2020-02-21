import SearchType from "./searchType";

export const searchByProfession = searchedValue =>
    (dispatch, getState) => {
        const {genomeData} = getState().genomesData;
        dispatch({ type: SearchType.SEARCH_BY_PROFESSION, payload: {genomeData,searchedValue} });
    };

export const getAllProfessions = genomeData =>({
        type: SearchType.GET_ALL_PROFESSIONS,
        payload: genomeData
})