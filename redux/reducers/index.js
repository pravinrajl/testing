import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const appReducers = combineReducers({});

const rootReducer = (state, action) => {
  const { type } = action;
  if (type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    return nextState;
  } else {
    return appReducers(state, action);
  }
};

export default rootReducer;
