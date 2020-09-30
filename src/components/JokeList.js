import React from 'react';
import JokeCard from './JokeCard';

const JokeList = (props) => {
    return (
        <article>
            {props.jokes.map(joke => 
                <>
                    <JokeCard joke={joke} />
                    <br/>
                </>
            )}
        </article>
    )
}

export default JokeList;