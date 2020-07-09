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
import { CompanyHomePage } from '../component/CompanyHomePage/CompanyHomePage';
import { Test } from '../component/test';
import { LoginPage } from '../component/LoginPage/LoginPage';
import { DashboardPage } from '../component/DashboardPage/DashboardPage';
import { McqTestPage } from '../component/TestPage/McqTestPage/McqTestPage';
import {connect} from 'react-redux'
import { CompanyLeaderPage } from '../component/CompanyPage/CompanyLeaderPage/CompanyLeaderPage';
import { CandidateScorePage } from '../component/CompanyPage/CandidateScorePage/CandidateScorePage';

const RouterContents = (props)=>{


    return(
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/company" component={CompanyHomePage} />
            <Route exact path="/test" component={CandidateScorePage} />

                {props.admin.is_admin ? (
                    <>
                    <Route exact path="/company/upload/question" component={CompanyQuestionPage} />
                <Route exact path="/user/:id/test" component={McqTestPage} />
                <Route exact path="/company/register" component={CompanyRegisterPage} />
                <Route exact path="/company/login" component={CompanyLoginPage} />
                <Route exact path="/company/leaderboard" component={CompanyLeaderPage} />
                <Route exact path="/candidate/profile/:id" component={CandidateScorePage} />
                </>
                ):(
                    <>
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path='/profile' component={UserProfilePage} />
                <Route exact path="/login" component={LoginPage} />
                {/* <Route exact path='/test' component={WebCamPage} /> */}
                <Route exact path="/company/login" component={CompanyLoginPage} />

                <Route exact path='/user/dashboard' component={DashboardPage} />
                <Route exact path="/company/register" component={CompanyRegisterPage} />
                
                <Route exact path="/user/:id/test" component={McqTestPage} />
                <Route exact path="/user/interview/:user_id/:c_id" component={InterviewTestPage} />
                
                    </>

                )}
            </Switch>
        </Router>
    )
}

function mapStateToProps(state){
    return{
        admin: state.user.user
    }
}

const RouterContent = connect(mapStateToProps,null)(RouterContents)
export {RouterContent}