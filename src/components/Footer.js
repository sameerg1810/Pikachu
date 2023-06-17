import React from "react";
import PokemonInfo from "./Sort";
import PokemonList from "./Search";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <section
        id="status"
        style={{ minHeight: "100vh", paddingBottom: "50px" }}
      >
        <iframe
          className="m-auto"
          allowFullScreen=""
          frameBorder="0"
          src="https://player.vimeo.com/video/116255105?autoplay=1&amp;muted=1&amp;loop=1&amp;portrait=0&amp;title=0&amp;byline=0"
          id="video"
          width="720"
          height="300"
          style={{
            height: "217px",
            width: "349.99px",
            marginTop: "0px",
            padding: "0px",
            maxWidth: "100%",
          }}
        ></iframe>
        <div
          className="row justify-content-center align-content-center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            margin: "0 -10px",
          }}
        >
          <div
            className="col d-xxl-flex align-items-xxl-center"
            style={{
              width: "100%",
              height: "380px",
              background:
                'url("/assets/img/wallpaperflare2.jpg?h=1221e984afbbeeaa690ed4953dd196a2") center / cover no-repeat',
              borderRadius: "6px",
              borderStyle: "groove",
            }}
          >
            <h1
              className="d-flex align-self-baseline align-items-xxl-start"
              data-bss-hover-animate="pulse"
              style={{
                color: "rgb(0,38,75)",
                textShadow: "0px 0px rgb(255,255,255)",
                boxShadow: "0px 0px var(--bs-border-color-translucent)",
                background: "var(--bs-border-color-translucent)",
              }}
            >
              SEARCH A POKEMON
            </h1>
            <div className="container">
              <div className="row">
                <div className="col" style={{ transform: "scale(0.6)" }}>
                  <PokemonList />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col d-xxl-flex align-items-xxl-center"
            style={{
              width: "100%",
              height: "380px",
              background:
                'url("/assets/img/wallpaper4.jpg?h=9fc51daf6e902cf06571bb2260c12151") center / cover no-repeat',
              borderRadius: "6px",
              borderStyle: "groove",
              maxWidth: "100%",
            }}
          >
            <h1
              className="align-self-baseline"
              data-bss-hover-animate="pulse"
              style={{
                color: "var(--bs-yellow)",
                textShadow: "3px 2px var(--bs-dark)",
                fontWeight: "bold",
                boxShadow: "0px 0px var(--bs-border-color-translucent)",
                background: "var(--bs-border-color-translucent)",
                borderRadius: "5px",
              }}
            >
              ALL POKEMONS
            </h1>
            <div className="container">
              <div className="row">
                <div className="col" style={{ transform: "scale(0.8)" }}>
                  <PokemonInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
