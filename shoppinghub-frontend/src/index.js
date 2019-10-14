import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"
import Home from './components/Home'
import Signin from './components/Signin'
import SignupContainer from './containers/signupContainer'

import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/signin" component={Signin}/>
                        <Route exact={true} path="/signup" component={SignupContainer}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
