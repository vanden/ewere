import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Commented out until developed. This all included early to ensure
// that redux-logger doesn't slip into production by mistake.
//
//import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
// Still commented out for extra caution. Must investigate what defines process.env.NODE_ENV
//  middlewares.push(logger);
}

// const configureStore = (preloadedState = {}) => (
//   createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
// );

// export default configureStore;
