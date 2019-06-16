const initialState = {
  searchResult:[],
  loading:false,
  page:1,
  allProfession:[],
}


const DataReducer = (state=initialState , action) =>{
  switch (action.type){
    case 'Loader':
      return{
        ...state,
        loading:true
      }
    case 'Search':
      return{
        ...state,
        searchResult: action.data.filter(person => person.professions
          .some(profession => profession.toUpperCase() === action.textInput)),
        loading:false,
        page:1,
      }
    case 'Get_Page':
      return {
        ...state,
        page:action.page,
        loading:false
      }
    case 'Prev_Page':
      return {
        ...state,
        loading:false,
        page:state.page-1
      }
    case 'Next_Page':
      return {
        ...state,
        loading:false,
        page:state.page+1
      }
    case 'Profession':
      const personsJob = action.data.map(person => {
        return person.professions.map(profession =>profession)
      });
      const professions =  personsJob.reduce(
        (arr, elem) => arr.concat(elem), []
      );
      return{
        ...state,
        allProfession:professions.filter((v, i, a) => a.indexOf(v) === i),

      }
    default:
      return state;
  }
}


export default DataReducer;