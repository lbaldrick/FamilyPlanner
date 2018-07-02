import React from 'react';
import ReactDom from 'react-dom';
import createRoutes from './routing/Routes';

const Routes = createRoutes();

ReactDom.render(Routes, document.getElementById('container'));