import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App';
import About from './components/About'
import Contact from './components/Contact'
import AddRecipes from './components/AddRecipe'

render(
  <Router>
    <Routes>
      {/* you have to make inside pages children of app, otherwise the 'home' page will not persist on the page */}
      <Route path='/' element={<App />} >
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='add' element={<AddRecipes />} />
      </Route>
    </Routes>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
