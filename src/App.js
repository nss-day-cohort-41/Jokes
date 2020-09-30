import React, { useEffect, useState } from 'react';
import JokeMain from './components/JokeMain';
import JokeSide from './components/JokeSide';
import JokeManager from './modules/JokeManager';

function App() {
  const [selectedType, setSelectedType] = useState();
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    loadJokesForType("general");
  }, []);

  const loadJokesForType = (type) => {
    JokeManager
      .getByType(type)
      .then(jokes => {
        setJokes(jokes);
        setSelectedType(type);
      });
  }

  return (
    <div className="App">
      <JokeSide 
        loadJokesForType={loadJokesForType}
        selectedType={selectedType} 
      />
      <JokeMain jokes={jokes}/>
    </div>
  );
}

export default App;
