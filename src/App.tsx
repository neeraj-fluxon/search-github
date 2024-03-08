import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' Component={Dashboard}/>
        <Route path='/history' Component={History} />
      </Routes>
    </div>
  );
}

export default App;
