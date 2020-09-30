import React from 'react';

const TypeNav = (props) => {
  return (
    <ul>
      <li className={props.selectedType === 'general' ? 'selected' : ''}
        onClick={() => props.loadJokesForType('general')}>
        General
      </li>
      <li className={props.selectedType === 'knock-knock' ? 'selected' : ''}
        onClick={() => props.loadJokesForType('knock-knock')}>
        Knock-Knock
      </li>
      <li className={props.selectedType === 'programming' ? 'selected' : ''}
        onClick={() => props.loadJokesForType('programming')}>
        Programming
      </li>
    </ul>
  )
}

export default TypeNav