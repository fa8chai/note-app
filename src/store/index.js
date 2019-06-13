import { createStore } from "redux";
import rootReducer from "../reducers/reducer";
import throttle from 'lodash.throttle';
import loadState from "../connect/localStorage";
import saveState from "../connect/localStorage2";
const persistedState = loadState();
const store = createStore(rootReducer,persistedState);


store.subscribe(throttle(() => {
  saveState({
    notes: store.getState().notes
  });
}, 1000));

export default store;