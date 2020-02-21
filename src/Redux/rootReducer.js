import { combineReducers} from "redux";


import genomesDataReducer from "./gonemosData/reducer";
import searchReducer from "./search/reducer";
import paginationReducer from "./pageInation/reducer";

const rootReducer = combineReducers({
    genomesData:genomesDataReducer,
    search:searchReducer,
    pagination:paginationReducer

});

export default rootReducer;