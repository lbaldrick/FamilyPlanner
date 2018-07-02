import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../components/layouts/home/HomeContainer.jsx';


const createRoutes = () => {
    return (
        <BrowserRouter >
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
};

export default createRoutes;

