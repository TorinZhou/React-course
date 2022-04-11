import React, { useState } from "react";

import URL from "./store/config";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const fecthMovieHandler = async () => {
    const response = await fetch(`${URL}films`);
    const data = await response.json();
    const transformedData = data.results.map((movie) => {
      return {
        title: movie.title,
        id: movie["episode_id"],
        releaseDate: movie["release_date"],
        openingText: movie["opening_crawl"],
      };
    });
    setMovies(transformedData);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fecthMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
