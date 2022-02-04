import {createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import reducers from '../reducers';

// create a makeStore function
const makeStore = context => createStore(reducers);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
