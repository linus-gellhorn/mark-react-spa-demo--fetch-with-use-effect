import { useEffect, useState } from "react";

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

interface Quote {
  quote: string;
}

function App() {
  // const [joke, setJoke] = useState<Joke>();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.kanye.rest/");
      const jsonBody: Quote = await response.json();
      setQuote(jsonBody);
    };
    fetchQuote();
  }, []);

  // useEffect(() => {
  //   const fetchJoke = async () => {
  //     const response = await fetch(
  //       "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  //     );
  //     const jsonBody: Joke[] = await response.json();
  //     setJoke(jsonBody[0]);
  //   };

  //   fetchJoke();
  // }, []);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Kanye quote app</h1>
      {quote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{quote.quote}</b>
          </p>
          {/* <p>
            <i>{joke.punchline}</i>
          </p> */}
        </>
      )}
    </>
  );
}

export default App;
