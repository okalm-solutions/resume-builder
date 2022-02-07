import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './index.css';
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={
        <main style={{ justifyContent: "center", display: "flex", marginTop: "8rem", flexDirection: "column", alignItems: "center"}}>
          <h1>Welcome To The Homepage</h1>
          <Link to='/app'>App </Link>
        </main>
      } />
      <Route path="/app" element={<App />} />
    </Routes>
    <Footer />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
