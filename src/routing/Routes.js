import React from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout.jsx';
import LoginContainer from '../components/layouts/login/LoginContainer.jsx';
import { MuiThemeProvider, } from '@material-ui/core/styles';
import { theme, } from '../styles/theme';
import {configureStore} from '../redux/Store.js';


const createRoutes = () => {
  const store = configureStore();
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter >
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/" component={LoginContainer} />
                    <MainLayout/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
};

export default createRoutes;
