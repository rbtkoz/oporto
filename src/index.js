import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './normalizer.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCmiLZF1o6PD_rmOJol27ola_pIyiFGZj4",
  authDomain: "porto-4cb55.firebaseapp.com",
  databaseURL: "https://porto-4cb55.firebaseio.com",
  storageBucket: "porto-4cb55.appspot.com",
  messagingSenderId: "385826194697"
};


firebase.initializeApp(config);


  ReactDOM.render(
  <App />,
    document.getElementById('root')
);



