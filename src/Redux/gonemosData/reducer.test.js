import GenomesDataActionType from "./genomesDataActionType";

import genomesDataReducer from "./reducer";

describe("genomeData",() =>{
    const INITIAL_STATE ={
        loading:false,
        genomeData:[],
        error:'',
    }
    it('should return the initial state' , ()=>{
        expect(genomesDataReducer(undefined,{})).toEqual({
            loading:false,
            genomeData:[],
            error:""
        })
    })

    it('should handle fetch data start', () =>{
        expect(genomesDataReducer(INITIAL_STATE,{
            type:GenomesDataActionType.FETCH_GENOMES_DATA_START,
        })).toEqual({
            loading:true,
            genomeData:[],
            error:""
        })
    })
    it('should handle fetch data success', () =>{
        expect(genomesDataReducer(INITIAL_STATE,{
            type:GenomesDataActionType.FETCH_GENOMES_DATA_SUCCESS,
            payload:['a','b']
        })).toEqual({
            loading:false,
            genomeData:['a','b'],
            error:""
        })
    })
    it('should handle fetch data failed', () =>{
        expect(genomesDataReducer(INITIAL_STATE,{
            type:GenomesDataActionType.FETCH_GENOMES_DATA_FAILURE,
            payload:'error'
        })).toEqual({
            loading:false,
            genomeData:[],
            error:"error"
        })
    })
})