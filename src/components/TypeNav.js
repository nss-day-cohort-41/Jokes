import React, { useContext } from 'react';

import { JokeContext } from '../providers/JokeProvider';

const TypeNav = () => {
  const { loadJokesForType, selectedType } = useContext(JokeContext);

  return (
    <ul>
      <li className={selectedType === 'general' ? 'selected' : ''}
        onClick={() => loadJokesForType('general')}>
        General
      </li>
      <li className={selectedType === 'knock-knock' ? 'selected' : ''}
        onClick={() => loadJokesForType('knock-knock')}>
        Knock-Knock
      </li>
      <li className={selectedType === 'programming' ? 'selected' : ''}
        onClick={() => loadJokesForType('programming')}>
        Programming
      </li>
    </ul>
  )
}

export default TypeNav