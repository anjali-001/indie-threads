import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {HomePagePath, LoginPagePath, ExplorePagePath} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import {AuthProvider} from './auth';

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={HomePagePath}    component={Home} />
                        <Route exact path={LoginPagePath}   component={Login} />
                        <Route exact path={ExplorePagePath} component={Explore} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default Routes