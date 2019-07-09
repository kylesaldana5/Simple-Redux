import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// Create store and apply middle ware 
// Export store to be used at entry point of application 
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;