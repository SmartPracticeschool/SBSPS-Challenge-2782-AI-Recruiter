import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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