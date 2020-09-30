import JokeMain from "../components/JokeMain";

const JokeManager = {
  getByType(type) {
    const url = `https://official-joke-api.appspot.com/jokes/${type}/ten`;
    return fetch(url).then(resp => resp.json())
  }
};

export default JokeManager;