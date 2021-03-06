import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {HomePagePath, LoginPagePath, ExplorePagePath} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
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