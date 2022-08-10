import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './i18n/i18n';

import 'swiper/css/bundle';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
