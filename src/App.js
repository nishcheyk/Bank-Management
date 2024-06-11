import React, { useState } from 'react';
import './App.css';

function App() {
  const [openedPDFs, setOpenedPDFs] = useState(new Set());

  const handleButtonClick = (pdfFileName) => {

    const FilePath = `${window.location.origin}/PDF/${pdfFileName}`;
    window.open(FilePath, '_blank');


    setOpenedPDFs((prevOpenedPDFs) => {
      const newOpenedPDFs = new Set(prevOpenedPDFs);
      newOpenedPDFs.add(pdfFileName);
      return newOpenedPDFs;
    });
  };

  const allPDFsOpened = openedPDFs.size >= 4;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open PDF Files</h1>
        <div className="button-container">
          <button onClick={() => handleButtonClick('A.pdf')}>Open A.pdf</button>
          <button onClick={() => handleButtonClick('B.pdf')}>Open B.pdf</button>
          <button onClick={() => handleButtonClick('C.pdf')}>Open C.pdf</button>
          <button onClick={() => handleButtonClick('D.pdf')}>Open D.pdf</button>
        </div>
        <button disabled={!allPDFsOpened}>Register</button>
      </header>
    </div>
  );
}

export default App;
