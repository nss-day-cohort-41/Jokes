import React, { useEffect, useState } from 'react';
import Joke from './Joke';

const JokeList = (props) => {
    return (
        <article>
            {props.jokes.map(joke => 
                <>
                    <Joke joke={joke} />
                    <br/>
                </>
            )}
        </article>
    )
}

export default JokeList;