import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

import {StrictMode} from 'react';
import {createRoot} from 'react-dom';
import home from './App';


const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
             
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route path="/" index element={<App/>} />
          
        </Routes>
      </div>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
)



reportWebVitals();

