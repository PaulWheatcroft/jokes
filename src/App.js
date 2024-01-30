import "./App.css";
import { useState } from "react";

// create a function to get a joke from https://official-joke-api.appspot.com/random_joke
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

  const revealPunchline = () => {
    const punchline = document.querySelector(".punchline");
    punchline.style.display = "block";
  };

  return (
    <div className="joke">
      <div className="button-container">
        <button onClick={nextJoke} className="button green">
          {!joke ? "Get Joke" : "Next"}
        </button>

        {!joke ? (
          <button onClick={revealPunchline} className="button grey" disabled>
            Reveal
          </button>
        ) : (
          <button onClick={revealPunchline} className="button pink">
            Reveal
          </button>
        )}
      </div>

      {joke && (
        <>
          <h2>{joke.setup}</h2>
          <h3 className="punchline" Style="display: none">
            {joke.punchline}
          </h3>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>The joke generator</h1>
      <h2>
        This is a joke generator. It will generate a random joke and display it
        on the screen.
      </h2>
      <p>
        Click the next button to see another joke. Click the reveal button to
        see the punchline.
      </p>

      <Joke />
    </div>
  );
}

export default App;
