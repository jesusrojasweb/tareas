import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import Tareas from './components/';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDLeFmyPVCmulOGACW6r2RYotSnmRdeqrs",
    authDomain: "tareas-jesusrojasweb.firebaseapp.com",
    databaseURL: "https://tareas-jesusrojasweb.firebaseio.com",
    projectId: "tareas-jesusrojasweb",
    storageBucket: "tareas-jesusrojasweb.appspot.com",
    messagingSenderId: "536996373693"
})

ReactDOM.render(<Tareas />, document.getElementById('root'));
registerServiceWorker();
