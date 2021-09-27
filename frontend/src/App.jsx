import React, {useState, useEffect} from 'react';
import GameList from './components/GameList';
import ExpressTest from './components/ExpressTest';

function App() {
  return (
    <div className="App">
      <GameList />
      <ExpressTest />
    </div>
  );
}

export default App;
