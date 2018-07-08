import React from 'react';
import HomeContainer from '../layouts/home/HomeContainer.jsx';
import { Route } from 'react-router-dom';

const MainLayout = () => {
    return <div className='main-layout'>
        <div className='main-layout_content'>
            <Route exact path={'/home'} component={HomeContainer}/>
        </div>
    </div>
};

export default MainLayout;