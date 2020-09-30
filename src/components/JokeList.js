import React, { useContext } from 'react';
import JokeCard from './JokeCard';

import { JokeContext } from '../providers/JokeProvider';

const JokeList = () => {
  const { jokes } = useContext(JokeContext);

  return (
    <article>
      {jokes.map(joke =>
        <>
          <JokeCard joke={joke} />
          <br />
        </>
      )}
    </article>
  )
}

export default JokeList;