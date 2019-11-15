import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom'

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './stores/reducers/rootReducer'

import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk,

        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
