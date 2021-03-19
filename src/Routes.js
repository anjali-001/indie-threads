import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePagePath, LoginPagePath, ExplorePagePath, CommunityPagePath, UserProfile, postPath} from './constants/Paths';
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Community from "./pages/Community";
import User from './pages/User'
import Post from './pages/Post'
import {AuthProvider} from './auth';
import {ExploreProvider} from './context/ExploreContext'
import BodyWrapper from './BodyWrapper';
import Footer from './components/Footer';

const Routes = () => {
    return (
        <>
            <AuthProvider>
                
                <BrowserRouter>
                    <ExploreProvider>
                    <BodyWrapper>
                    <Navbar/>
                    <Switch>
                        <Route exact path={HomePagePath}    component={Home} />
                        <Route exact path={LoginPagePath}   component={Login} />
                        <Route exact path={ExplorePagePath} component={Explore} />
                        <Route exact path={CommunityPagePath} component={Community} />
                        <Route exact path={UserProfile + "/:userid"} component={User}/>
                        <Route exact path={postPath} component={Post}/>
                    </Switch>
                    <Footer />
                    </BodyWrapper>
                    </ExploreProvider>
                </BrowserRouter>
                
            </AuthProvider>
        </>
    )
}

export default Routes