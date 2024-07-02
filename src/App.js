import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      
      {/* Header/Nav Bar */}
      <Header />
      
      {/* Tinder Cards */}
      <TinderCards />

      {/* Buttons below the Tinder Cards */}
      <SwipeButtons />
      

    </div>
  );
}

export default App;
