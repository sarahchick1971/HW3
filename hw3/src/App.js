import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {Login} from './Login';
import {Register} from './Register';

function App() {
  const [currentForm, setCurrentForm]=useState('Login');

  const toggleform =(forename) =>{
    setCurrentForm(forename);

  }
  return (
    <div className="App">
      {
        currentForm==='Login'?<Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
      }
      
        
    </div>
  );
}

export default App;