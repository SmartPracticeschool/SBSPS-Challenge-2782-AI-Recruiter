import React from 'react';
import {Router, Route, Switch} from 'react-router'
import { RegisterPage } from '../component/RegisterPage/RegisterPage';

const RouterContent = (props)=>{


    return(
        <Router>
            <Switch>
                <Route exact path="/" component={RegisterPage} />
                <Route exact path="/register" component={RegisterPage} />
            </Switch>
        </Router>
    )
}

export {RouterContent}