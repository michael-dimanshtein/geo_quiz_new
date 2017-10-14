import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GeoApp from './GeoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GeoApp />, document.getElementById('root'));
registerServiceWorker();
