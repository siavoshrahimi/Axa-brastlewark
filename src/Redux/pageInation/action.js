import PaginationType from "./pageInationActionType";


//get the current page
export const getCurrentPage = page =>{
    return {
        type: PaginationType.GET_PAGE,
        payload: page
    }
};

/*go to next page with next button pagination*/
export const NextPageAction = () =>{
    return{
        type: PaginationType.NEXT_PAGE,
    }
}
/*go to prev page with prev button pagination*/
export const PrevPageAction = () =>{
    return{
        type: PaginationType.PREVIOUS_PAGE,
    }
}