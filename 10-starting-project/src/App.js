import React, { useState } from "react";

import URL from "./store/config";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fecthMovieHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${URL}films/`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.status}`);
      }
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  let content = <p>Found no movies</p>;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fecthMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
