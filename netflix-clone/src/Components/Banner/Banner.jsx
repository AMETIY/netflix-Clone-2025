import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";
import requests from "../../utils/requests";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import './Banner.css'

const Banner = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNetflixOriginals = async () => {
    try {
      const request = await instance.get(requests.fetchNetflixOriginals);
      //   console.log(request)
      const data = request.data?.results;
      //   console.log(data)
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      //   console.log(randomMovie)
      setSingleMovie(randomMovie);
      setLoading(false);
    } catch (err) {
      console.info("Error", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNetflixOriginals();
  }, []);

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substring(maxLength - 1) + "..."
      : text;
  };

  // console.log(singleMovie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <Container className="h-100 text-white py-5">
          {loading ? (
            <div className="col-12">
              <Spinner className="loading-text">
                🎥 Loading image... Please wait!
              </Spinner>
            </div>
          ) : error ? (
            <Alert variant="danger">🚨 Error: {error}</Alert>
          ) : (
            <>
              <h1 className="banner__title  display-4">
                {singleMovie?.title ||
                  singleMovie?.name ||
                  singleMovie?.original_name}
              </h1>

              <div className=" mb-3">
                <Button variant="light" className="me-2 banner__button">Play</Button>
                <Button variant="outline-light" className="banner__button">My List</Button>
              </div>
              <p className="banner__description lead">
                {truncateText(singleMovie?.overview, 150)}
              </p>
            </>
          )}
        </Container>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
