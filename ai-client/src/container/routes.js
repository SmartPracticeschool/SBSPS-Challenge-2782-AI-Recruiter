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
import { CompanyQuestionPage } from '../component/CompanyPage/CompanyUploadQuestion/CompanyQuestionPage';
import { AudioRecording } from '../component/WebCamPage/AudioRecording';
import { InterviewTestPage } from '../component/TestPage/InterviewTestPage/InterviewTestPage';

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
                <Route exact path="/company/upload/question" component={CompanyQuestionPage} />
                <Route exact path="/user/test" component={InterviewTestPage} />
            </Switch>
        </Router>
    )
}

export {RouterContent}