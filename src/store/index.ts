import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { userReducer, IUserStore } from "./reducers/user-reducer";
import { appReducer, TAppStore } from "./reducers/app-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allEnhancers = composeEnhancers(applyMiddleware(thunk));

export interface IStore {
  userStore: IUserStore;
  appStore: TAppStore;
}

export type store = IStore;
export const store = createStore(
  combineReducers({
    userStore: userReducer,
    appStore: appReducer,
  }),
  allEnhancers
);
