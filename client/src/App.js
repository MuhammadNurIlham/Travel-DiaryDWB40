import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import DetailJourney from './pages/DetailJourney';
import Profile from './pages/Profile';
import Editor from './components/Editor';
import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/DetailJourney" element={<DetailJourney />} />
        <Route exact path="/Bookmark" element={<Bookmark />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Editor" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;
