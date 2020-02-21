import GenomesDataActionType from "./genomesDataActionType";

const INITIAL_STATE ={
    loading:false,
    genomeData:[],
    error:'',
}

const genomesDataReducer = (state= INITIAL_STATE , action) =>{
    switch (action.type){
        case GenomesDataActionType.FETCH_GENOMES_DATA_START:
            return{
                ...state,
                loading:true
            }
        case GenomesDataActionType.FETCH_GENOMES_DATA_SUCCESS:
            return{
                ...state,
                genomeData: action.payload,
                loading:false,
                error: null,
            }
        case GenomesDataActionType.FETCH_GENOMES_DATA_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
}

export default genomesDataReducer;
