import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import * as reducers        from './reducers';
import Immutable            from 'immutable';
import promiseMiddleware    from './lib/promiseMiddleware';
import immutifyState        from './lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

import routes               from './util/routes';

var initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

const reducer = combineReducers(reducers);

const logger = (store) => (next) => (action) => {
  console.log("Action fired: ", action)
  next(action)
}

const store = applyMiddleware(logger,promiseMiddleware)(createStore)(reducer, initialState);

//store.dispatch({type: "DO_INIT", payload: { env: process.env.NODE_ENV } })

const app = document.getElementById('app')

render(<Provider store={store}>
				<Router children={routes} history={history} />
			</Provider>, app)

console.log("done")