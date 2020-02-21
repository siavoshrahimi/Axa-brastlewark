import PaginationType from "./pageInationActionType";

const initialState = {
    page:1,
}

const paginationReducer = (state=initialState , action) =>{
    switch (action.type){
        case PaginationType.GET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case PaginationType.PREVIOUS_PAGE:
            return {
                ...state,
                page:state.page-1
            }
        case PaginationType.NEXT_PAGE:
            return {
                ...state,
                page:state.page+1
            }
        default:
            return state;
    }
}


export default paginationReducer;