// == Import : package
import React from 'react';
import { render } from 'react-dom';

// == Import : components
import App from './components/App/app';

const rootReactElement = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
const target = document.getElementById('root');

render(rootReactElement, target);
