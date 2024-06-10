import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedLinks, setClickedLinks] = useState(new Set());

  const handleLinkClick = (linkId) => {
    setClickedLinks(prevState => {
      const newClickedLinks = new Set(prevState);
      newClickedLinks.add(linkId);
      return newClickedLinks;
    });
  };

  const isButtonEnabled = clickedLinks.size >= 4;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Link Click App</h1>
        <div>
          <a href="#" onClick={() => handleLinkClick(1)}>Link 1</a>
        </div>
        <div>
          <a href="#" onClick={() => handleLinkClick(2)}>Link 2</a>
        </div>
        <div>
          <a href="#" onClick={() => handleLinkClick(3)}>Link 3</a>
        </div>
        <div>
          <a href="#" onClick={() => handleLinkClick(4)}>Link 4</a>
        </div>
        <div>
          <a href="#" onClick={() => handleLinkClick(5)}>Link 5</a>
        </div>
        <div>
          <a href="#" onClick={() => handleLinkClick(6)}>Link 6</a>
        </div>
        <button disabled={!isButtonEnabled}>Submit</button>
      </header>
    </div>
  );
}

export default App;
