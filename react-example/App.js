import Profile from './Profile.js';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Profile pfpColor="red" username="User 1"></Profile>
      <Profile pfpColor="orange" username="User 2"></Profile>
      <Profile pfpColor="yellow" username="User 3"></Profile>
    </div>
  );
}

export default App;
