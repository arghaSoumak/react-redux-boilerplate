import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'

const root = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root
);

/* for PWAs */
serviceWorker.unregister();
