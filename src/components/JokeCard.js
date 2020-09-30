import React from 'react';

const JokeCard = (props) => {
    return (
        <section>
            <em>{props.joke.setup}</em>
            <br/>
            <strong>{props.joke.punchline}</strong>
        </section>
    );
}

export default JokeCard;