// App.js
import React, { useState } from 'react';
import Machine from './components/Machine'; 
import CreatePoem from './components/CreatePoem'; 

function App() {

  const [poems, setPoems] = useState([]);
  const [currentPoem, setCurrentPoem] = useState('');

  const generateNewPoem = async () => {
    const newPoem = await CreatePoem();
    setCurrentPoem(newPoem);
    setPoems([...poems, newPoem]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generateNewPoem}>Generate New Poem</button>
      </header>
      <div>{currentPoem? <Machine poem={currentPoem} /> : 'No poem generated yet.'}</div>
        {poems.map((poem, index) => (
          <h1 key={index}>{poem}</h1>
        ))}
    </div>
  );
}

export default App;