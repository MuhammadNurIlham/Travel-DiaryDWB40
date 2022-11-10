import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import DetailJourney from './pages/DetailJourney';
import Profile from './pages/Profile';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <DetailJourney />
      <Profile />
      <Editor />
    </div>
  );
}

export default App;
