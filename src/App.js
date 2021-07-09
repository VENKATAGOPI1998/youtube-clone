import React from "react";
import './App.css';
import Header from './Header';
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__page">
      <Sidebar></Sidebar>
      <RecommendedVideos></RecommendedVideos>
      </div>
    </div>
  );
}

export default App;
