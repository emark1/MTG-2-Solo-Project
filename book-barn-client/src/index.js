import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import requireAuth from './components/requireAuth'

import {CardList} from './components/UserCollection'

import {AddBook} from './components/AddBook'
import {BookList} from './components/BookList'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/view-all-cards" component={CardList} />
            <Route path="/add-book" component={AddBook} />
        </Switch>
    </BaseLayout>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

