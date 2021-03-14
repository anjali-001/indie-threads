import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {HomePagePath, LoginPagePath, ExplorePagePath, CommunityPagePath, UserProfile} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Community from "./pages/Community";
import User from './pages/User'
import {AuthProvider} from './auth';
import {ExploreProvider} from './context/ExploreContext'

const Routes = () => {
    return (
        <>
            <AuthProvider>
                
                <BrowserRouter>
                    <ExploreProvider>
                    <Navbar/>
                    <Switch>
                        <Route exact path={HomePagePath}    component={Home} />
                        <Route exact path={LoginPagePath}   component={Login} />
                        <Route exact path={ExplorePagePath} component={Explore} />
                        <Route exact path={CommunityPagePath} component={Community} />
                        <Route exact path={UserProfile} component={User}/>
                    </Switch>
                    </ExploreProvider>
                </BrowserRouter>
                
            </AuthProvider>
        </>
    )
}

export default Routes