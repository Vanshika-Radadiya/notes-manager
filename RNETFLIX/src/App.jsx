import { useState } from "react";
import "./App.css";
import movies_data from "./data/movies";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

function App() {
  // State for selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // State for search text
  const [search, setSearch] = useState("");

  // Filter movies based on search
  const filteredMovies = movies_data.filter((movie) => {
    const searchText = search.toLowerCase();

    return (
      movie.name.toLowerCase().includes(searchText) ||
      movie.genre.toLowerCase().includes(searchText) ||
      movie.director.toLowerCase().includes(searchText) ||
      movie.cast.toLowerCase().includes(searchText) ||
      movie.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <nav>
        <div className="logo">NETFLIX</div>

        <input
          type="text"
          className="search"
          placeholder="🔍 Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="container">
        <h2>Trending Now</h2>

        <div className="movies">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => setSelectedMovie(movie)}
              />
            ))
          ) : (
            <h2>No movies found</h2>
          )}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}

export default App;