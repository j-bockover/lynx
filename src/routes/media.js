import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import Navbar from "../components/navbar";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    let response = await axios.get("/movies_api");
    let all_movies = response.data;
    setMovies(all_movies);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Movies</h3>
      <div className="container-fluid p-0">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-12 col-lg-6 border-top mb-2 pt-2 d-sm-flex">
              <img
                className="ps-0 pt-1 pe-3 pb-2"
                src={movie.image}
                width="auto"
                height="300px"
                alt={movie.title + " poster image"}
              ></img>
              <div className="pt-1">
                <h5>{movie.title}</h5>
                <br />
                <p>{movie.overview}</p>
                <p className="fw-bold">Release date: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(async () => {
    let response = await axios.get("/games_api");
    let all_games = response.data;
    setGames(all_games);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Video Games</h3>
      <div className="container-fluid p-0">
        <div className="row">
          {games.map((game) => (
            <div className="col-md-12 col-lg-6 border-top mb-2 pt-2 d-flex">
              <img
                className="ps-0 pt-1 pe-3 pb-2"
                src={game.image}
                width="250px"
                height="250px"
                alt={game.name + " cover image"}
                style={{ objectFit: "fill" }}
              ></img>
              <div className="pt-1">
                <h5>{game.name}</h5>
                <br />
                <p>Last update: {game.last_update.split("T")[0]}</p>
                <p>Release date: {game.release_date}</p>
                <p>Game rating: {game.rating} / 5</p>
                <p>
                  Platforms: {game.platforms.map((platform) => platform + ", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComicList() {
  const [comics, setComics] = useState([]);
  useEffect(async () => {
    let response = await axios.get("/comics_api");
    let all_comics = response.data;
    setComics(all_comics);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Comic Books</h3>
      <div className="container-fluid p-0">
        <div className="row">
          {comics.map((comic) => (
            <div className="col-md-12 col-lg-6 border-top mb-2 pt-2 d-flex">
              <img
                className="ps-0 pt-1 pe-3 pb-2"
                src={comic.image}
                width="200px"
                height="300px"
                alt={comic.name + " cover image"}
                style={{ objectFit: "fill" }}
              ></img>
              <div className="pt-1">
                <h5>{comic.name}</h5>
                <br />
                <p>ISBN #: {comic.isbn ? comic.isbn : "None"}</p>
                <p>Page Count: {comic.pageCount}</p>
                <p>
                  Creators: {comic.creators.map((creator) => creator + ", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Media() {
  return (
    <div style={{ backgroundColor: "#03254c", paddingBottom: "20px" }}>
      <Navbar />
      <MovieList />
      <GameList />
      <ComicList />
    </div>
  );
}
