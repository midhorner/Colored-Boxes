import React from 'react';
import './App.css';
import ColorBlock from './coloredboxes';

function App() {
  let blocks = [];
  for(let i = 0; i < 100; i++) {
    blocks.push(<ColorBlock key={i} />);
  }

  return (
    <div className="App">
      {blocks}
    </div>
  );
}

export default App;
