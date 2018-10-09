import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import Tareas from './components/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tareas />, document.getElementById('root'));
registerServiceWorker();
