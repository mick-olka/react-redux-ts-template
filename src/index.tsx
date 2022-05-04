import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/global.scss'
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// @ts-ignore
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
</React.StrictMode>);

// If you want your hooks to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
