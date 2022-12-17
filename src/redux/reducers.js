import { combineReducers } from "redux";
import { dataCategories } from "./reducers/categories";
import { dataReducer } from "./reducers/data";

const rootReducer = combineReducers({
    data: dataReducer,
    categories: dataCategories

});

export default rootReducer;
