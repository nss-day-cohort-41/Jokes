import React, { useState } from 'react';

export const JokeContext = React.createContext();

export const JokeProvider = (props) => {
  const [selectedType, setSelectedType] = useState();
  const [jokes, setJokes] = useState([]);

  const loadJokesForType = (type) => {
    const url = `https://official-joke-api.appspot.com/jokes/${type}/ten`;
    fetch(url).then(resp => resp.json())
      .then(jokes => {
        setJokes(jokes);
        setSelectedType(type);
      });
  };

  return (
    <JokeContext.Provider value={{ loadJokesForType, jokes, selectedType }}>
      {props.children}
    </JokeContext.Provider>
  );
};