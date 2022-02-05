import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <main style={{ justifyContent: "center", display: "flex", marginTop: "8rem", flexDirection: "column", alignItems: "center"}}>
          <h1>Welcome To The Homepage</h1>
          <a href='/login'>Login</a>
        </main>
      } />
      <Route path="/resume" element={<App />} />
      <Route path="*"  element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      } />
    </Routes>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
