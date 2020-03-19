import React from 'react';
import logo from './logo.svg';


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/homeContainer'
import SigninContainer from './containers/signinContainer'
import SignupContainer from './containers/signupContainer'
import ContactUs from "./components/contactus"
import AboutUs from "./components/aboutus"
import ReturnPolicy from "./components/returnpolicy"
import Header from "./components/header"
import dashboard from "./containers/dashboardContainer"
import Authenticate from "./components/authenticate"
import DashboardContainer from './containers/dashboardContainer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/signin" component={SigninContainer} />
        <Route exact={true} path="/signup" component={SignupContainer} />
        <Route exact={true} path="/aboutus" component={AboutUs} />
        <Route exact={true} path="/contactus" component={ContactUs} />
        <Route exact={true} path="/returnpolicy" component={ReturnPolicy} />
        <Authenticate path="/dashboard">
          <DashboardContainer />
        </Authenticate>
        <Route path="*" component={() => (<div>no match</div>)} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
