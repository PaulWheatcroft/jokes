// create a function to get a joke from https://official-joke-api.appspot.com/random_joke
import { useState } from "react";
const getJoke = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await response.json();
  return data;
};

// create a React function to display the joke setup on the screen
// when the a reveal button is pressed the punchline is then displayed underneath the joke setup
// when the next button is pressed the joke setup is then displayed again
// the punchline is hidden when the next button is pressed
const Joke = () => {
  const [joke, setJoke] = useState(null);

  const nextJoke = async () => {
    setJoke(null);
    const jokeData = await getJoke();
    setJoke(jokeData);
  };

  return (
    <div>
      <h2>Joke</h2>
      <p>{joke?.punchline}</p>
      <button onClick={nextJoke}>Reveal</button>
    </div>
  );
};
