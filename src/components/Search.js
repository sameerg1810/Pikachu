import React, { useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const PokemonInfo = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonColor, setPokemonColor] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pokemonName) {
      window.alert("Please enter a Pokemon name");
      return;
    }

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = response.data;
      setPokemonData(data);

      const colorResponse = await axios.get(data.color);
      const colorData = colorResponse.data;
      setPokemonColor(colorData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleReset = () => {
    setPokemonName("");
    setPokemonData(null);
    setPokemonColor(null);
  };

  return (
    <div className="container mt-5 bg-gradient text-bg-dark rounded-5 border-info">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="pokemonName">Enter Pokemon Name:</label>
              <input
                type="text"
                className="form-control"
                id="pokemonName"
                value={pokemonName}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
          {pokemonData && (
            <Card className="mt-3 position-relative" style={{ zIndex: 1 }}>
              <Card.Img variant="top" src={pokemonData.sprites.front_default} />
              <Card.Body>
                <Card.Title>{pokemonData.name}</Card.Title>
                <Card.Text>
                  Height: {pokemonData.height}
                  <br />
                  Weight: {pokemonData.weight}
                </Card.Text>
                <Button variant="primary" href={pokemonData.species.url}>
                  More Info
                </Button>
              </Card.Body>
            </Card>
          )}
          {pokemonColor && (
            <Card
              className="mt-3 position-relative"
              style={{ zIndex: 1, top: "-50px" }}
            >
              <Card.Body>
                <Card.Title>Color Information</Card.Title>
                <Card.Text>Color Name: {pokemonColor.name}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
