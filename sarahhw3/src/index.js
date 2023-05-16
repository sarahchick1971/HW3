import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Register from './Register';
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
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route path="/" index element={<App/>} />
          <Route path="/Dasboard" element={<Dashboard/>} />
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
