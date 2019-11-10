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
import HomeContainer from './containers/homeContainer'
import SigninContainer from './containers/signinContainer'
import SignupContainer from './containers/signupContainer'
import ContactUs from "./components/contactus"
import AboutUs from "./components/aboutus"
import ReturnPolicy from "./components/returnpolicy"
import Header from "./components/header"
import dashboard from "./components/dashboard"
import Authenticate from "./components/authenticate"
import * as serviceWorker from './serviceWorker';



const store = createStore(rootReducer,applyMiddleware(thunk))

const Profile = () => (
    <div>

    </div>
)

const Dashboard = () => (
    <div>

    </div>
)



ReactDOM.render(
            <Provider store={store}>
                
                <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact={true}  path="/" component={HomeContainer}/>
                        <Authenticate>
                            <Route exact={true} path="/signin" component={SigninContainer}/>
                            <Route  exact={true} path="/signup" component={SignupContainer}/>
                            <Route  path="/dashboard" component={dashboard} />
                            <Route exact={true} path="/aboutus" component={AboutUs} />
                            <Route exact={true} path="/contactus" component={ContactUs} />
                            <Route exact={true} path="/returnpolicy" component={ReturnPolicy} />
                            <Route exact path="/dashboard/profile" component={Profile} />
                            <Route exact path="/dashboard/product" component={Profile} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            
                        </Authenticate>
                    </Switch>
                </BrowserRouter>
            </Provider>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
