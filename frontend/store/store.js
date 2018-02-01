// Copyright 2018 Brian van den Broek vanden@gmail.com

// This file is part of ewere.

//     ewere is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     ewere is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with ewere.  If not, see <http://www.gnu.org/licenses/>.



import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // FixMe Remove this in favour of
                                  // require below once in production

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}



import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk]
//middlewares.push(logger)  // FixMe Remove once in production

// Commented out until we are ready for production. This all included
// early to ensure that redux-logger doesn't slip into production by
// mistake.
//
// if (process.env.NODE_ENV !== 'production') {
//   // must use 'require' (import only allowed at top of file)
//   const { logger } = require('redux-logger');
// // Still commented out for extra caution. Must investigate what defines process.env.NODE_ENV
// //  middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
)

export default configureStore
