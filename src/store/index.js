import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import burgerBuilderReducer from "./reducers/burgerBuilder";
import orderReducer from "./reducers/order";
import authReducer from "./reducers/auth";

const composeEnhancers = compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

export default store;
