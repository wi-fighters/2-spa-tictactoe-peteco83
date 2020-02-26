import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../src/components/Game'

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

// ==========================
// Components
// ==========================

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
