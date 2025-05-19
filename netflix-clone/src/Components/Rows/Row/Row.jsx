import React, { useEffect, useState, useRef } from "react";
import instance from "../../../utils/axios";
import "./Row.css";
import { Container, Spinner, Alert } from "react-bootstrap";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  //  const trailerRef = useRef();

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  const fetchMovies = async () => {

    if (!fetchUrl) {
      console.error('fetchUrl is missing');
      setError('fetUrl Nor Provided');
      setLoading(false);
      return;
    }

    try {
      const request = await instance.get(fetchUrl);
      // console.log(fetchUrl);
      // console.log(request);
      const data = request.data?.results;
      setMovies(data || []);
    } catch (err) {
      console.info("Error", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    const findTrailer = async () => {
      try {
        const url = await movieTrailer(
          movie?.title || movie?.name || movie?.original_name || ""
        );

        if (url) {
          //(url):https://www.youtube.com/watch?v=tlLsFEDHtWs

          const urlObject = new URL(url); //creates a url obj enabling us access parts or url(.search(query string), .hostname(www.youtube.com), .pathname(/watch))

          // (urlObject.search) returns a query string= ?v=tlLsFEDHtWs
          const urlParams = new URLSearchParams(urlObject.search); //returns URLSearchParams objects w/c provides get function

          const id = urlParams.get("v");
          setTrailerUrl(id);
        } else {
          console.info("No Trailer Found for", movie?.name);
        }
      } catch (err) {
        console.info("Error finding trailer:", err.message);
        setError(err.message);
      }
    };

    findTrailer();
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);


   // Close trailer when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("trailer-overlay")) {
      setTrailerUrl("");
    }
  };

  // console.log(movies)

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {loading ? (
          <div className="col-12">
            <Spinner className="loading-text" />
              <p>🎥 Loading image... Please wait!</p>
            
          </div>
        ) : error ? (
          <Alert variant="danger">🚨 Error: {error}</Alert>
        ) : movies.length > 0 ? (
          movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id || index}
              src={`${image_base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name || "Movie"}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
          ))
        ) : (
          <div className="no-videos-found">🚫 No Videos Found</div>
        )}
      </div>

      {/* {trailerUrl && !error && !loading && (
        <div style={{ padding: "40px" }}>
          <Youtube videoId={trailerUrl} opts={opts} />
        </div>
      )} */}
      {trailerUrl && !error && !loading && (
        <div className="trailer-overlay" onClick={handleOverlayClick}>
          <div className="trailer-popup" >
            <Youtube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
