import React from 'react';
import JokeList from './JokeList';
import JokeHeader from './JokeHeader';

const JokeMain = () => {
  return (
    <main>
      <JokeHeader />
      <JokeList />
    </main>
  );
};

export default JokeMain;