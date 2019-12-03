import React from 'react';
import './App.css';
import ColorBlock from './coloredboxes';

function App() {
  let blocks = [];
  for(let i = 0; i < 24; i++) {
    blocks.push(<ColorBlock key={i} />);
  }

  return (
    <div className="header"> RANDOM COLORED BLOCKS
    <div className="App">      
      {blocks}
      </div>
    </div>
  );
}

export default App;
