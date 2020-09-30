import React from 'react';

const Joke = ({joke}) => {
    return (
        <section>
            <em>{joke.setup}</em>
            <br/>
            <strong>{joke.punchline}</strong>
        </section>
    );

}

export default Joke;