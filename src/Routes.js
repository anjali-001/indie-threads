import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {HomePagePath, LoginPagePath, ExplorePagePath} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={HomePagePath}    component={Home} />
                    <Route exact path={LoginPagePath}   component={Login} />
                    <Route exact path={ExplorePagePath} component={Explore} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes