import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RegisterPage } from '../component/RegisterPage/RegisterPage';
import { Homepage } from '../component/HomePage/HomePage';
import { history } from '../component/_Api/location/location';
import { WebCamContent } from '../component/WebCamPage/WebCamContent';

const RouterContent = (props)=>{


    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/testing" component={WebCamContent} />
            </Switch>
        </Router>
    )
}

export {RouterContent}