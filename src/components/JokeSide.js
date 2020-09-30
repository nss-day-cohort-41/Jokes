import React from 'react';
import TypeNav from './TypeNav';

const JokeSide = (props) => {
  return (
    <aside className="sideNav">
      <TypeNav
        loadJokesForType={props.loadJokesForType}
        selectedType={props.selectedType} />
    </aside>
  );
};

export default JokeSide;