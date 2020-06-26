import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RegisterPage } from '../component/RegisterPage/RegisterPage';
import { Homepage } from '../component/HomePage/HomePage';
import { history } from '../component/_Api/location/location';
import { UserProfilePage } from '../component/UserProfile/UserProfilePage';
import { WebCamContent } from '../component/WebCamPage/WebCamContent';
import { WebCamPage } from '../component/WebCamPage/WebCamPage';
import {CompanyRegisterPage} from '../component/CompanyPage/CompanyRegisterPage/CompanyRegisterPage'
import {CompanyLoginPage} from '../component/CompanyPage/CompanyLoginPage/CompanyLoginPage'

const RouterContent = (props)=>{


    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path='/profile' component={UserProfilePage} />
                <Route exact path='/test' component={WebCamPage} />
                <Route exact path="/company/register" component={CompanyRegisterPage} />
                <Route exact path="/company/login" component={CompanyLoginPage} />
            </Switch>
        </Router>
    )
}

export {RouterContent}