import React from "react";
import Footer from "./Footer";
import "bootswatch/dist/quartz/bootstrap.min.css";

const Pokedex = () => {
  return (
    <div className="mb-0">
      <section
        className="d-flex flex-column justify-content-between text-danger"
        id="hero"
      >
        <div className="rubberBand animated" id="hero-top">
          <nav className="navbar navbar-light navbar-expand-md flash animated text-danger">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                data-bss-hover-animate="bounce"
                href="#"
              >
                <img
                  src="/assets/img/Pokemon.svg?h=0271a3067bf9687765739901a92871d6"
                  alt="Pokemon Logo"
                />
              </a>
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navcol-1"
              >
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse shake animated"
                id="navcol-1"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-danger rounded-5"
                      data-bss-hover-animate="bounce"
                      href="#"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-danger rounded-5"
                      data-bss-hover-animate="bounce"
                      href="#"
                    >
                      ANIME &amp; MOVIES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-danger rounded-5"
                      data-bss-hover-animate="bounce"
                      href="#"
                    >
                      POKEDEX
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-danger rounded-5"
                      data-bss-hover-animate="bounce"
                      href="#"
                    >
                      STORE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-danger rounded-5"
                      data-bss-hover-animate="bounce"
                      href="#"
                    >
                      SIGN-IN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <h1 className="wobble animated" id="title">
            BUZZZ!
          </h1>
          <h1 className="wobble animated" id="subtitle">
            POKEDEX
          </h1>
        </div>
        <div
          className="justify-content-center align-content-center text-danger"
          id="hero-bottom"
        >
          <div
            className="container"
            style={{ padding: "3px", margin: "1", maxWidth: "100%" }}
          >
            <div className="row">
              <div className="col">
                <p className="text-center flash animated">
                  <br />
                  <span>
                    Pokémon (an abbreviation for Pocket Monsters in Japanese)
                    is&nbsp;
                  </span>
                  <strong>
                    <span>
                      a Japanese media franchise managed by The Pokémon Company,
                      founded by Nintendo, Game Freak, and Creatures
                    </span>
                  </strong>
                  <span>
                    . The franchise was created by Satoshi Tajiri in 1996 and is
                    centered around fictional creatures called "Pokémon".
                  </span>
                  <br />
                  <br />
                </p>
                <div className="row">
                  <div className="col d-flex justify-content-center text-danger">
                    <button
                      className="btn btn-primary justify-content-center text-danger"
                      data-bss-hover-animate="flash"
                      type="button"
                    >
                      Explore Pokedex
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pokedex;
