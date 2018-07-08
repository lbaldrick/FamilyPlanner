import React from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout.jsx';
import LoginContainer from '../components/layouts/login/LoginContainer.jsx';
import { MuiThemeProvider, } from '@material-ui/core/styles';
import { theme, } from '../styles/theme';


const createRoutes = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter >
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/" component={LoginContainer} />
                    <MainLayout/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
};

export default createRoutes;

