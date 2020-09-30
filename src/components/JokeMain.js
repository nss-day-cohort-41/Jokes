import React from 'react';
import JokeList from './JokeList';
import JokeHeader from './JokeHeader';

const JokeMain = (props) => {
  return (
    <main>
      <JokeHeader />
      <JokeList jokes={props.jokes} />
    </main>
  );
};

export default JokeMain;