import React, { useEffect, useContext } from 'react';
import JokeMain from './components/JokeMain';
import JokeSide from './components/JokeSide';
import { JokeContext } from './providers/JokeProvider';

function App() {
  const { loadJokesForType } = useContext(JokeContext);

  useEffect(() => {
    loadJokesForType("general");
  }, []);

  return (
    <div className="App">
      <JokeSide />
      <JokeMain />
    </div>
  );
}

export default App;
