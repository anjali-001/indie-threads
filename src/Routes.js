import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {HomePagePath, LoginPagePath, ExplorePagePath, CommunityPagePath} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Community from "./pages/Community";
import {AuthProvider} from './auth';

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path={HomePagePath}    component={Home} />
                        <Route exact path={LoginPagePath}   component={Login} />
                        <Route exact path={ExplorePagePath} component={Explore} />
                        <Route exact path={CommunityPagePath} component={Community} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default Routes