import React from 'react';
import '../App.css'
import reactLogo from '/react.svg'
import firebase from '/firebase.png'

const Home = () => {

  return (
    <div>
          <a href="https://firebase.com/" target="_blank">
            <img src={firebase} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
  );
};

export default Home;
