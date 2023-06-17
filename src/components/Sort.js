import React, { useState, useEffect } from "react";
import "bootswatch/dist/solar/bootstrap.min.css";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(3);
  const [paginationRange, setPaginationRange] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010");
      const data = await res.json();
      setPokemonList(data.results);
    }
    fetchPokemonList();
  }, []);

  useEffect(() => {
    const calculatePaginationRange = () => {
      const totalPages = Math.ceil(pokemonList.length / pokemonPerPage);
      let startPage = Math.max(currentPage - 1, 1);
      let endPage = Math.min(startPage + 2, totalPages);

      if (endPage - startPage < 2) {
        startPage = Math.max(endPage - 2, 1);
      }

      const range = [];
      for (let i = startPage; i <= endPage; i++) {
        range.push(i);
      }
      setPaginationRange(range);
    };

    calculatePaginationRange();
  }, [currentPage, pokemonList, pokemonPerPage]);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemonList = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(pokemonList.length / pokemonPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPokemonCards = () => {
    return currentPokemonList.map((pokemon, index) => {
      const pokemonNumber = indexOfFirstPokemon + index + 1;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

      return (
        <div className="card mx-1 my-2 p-1 rounded-1" key={index}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt={pokemon.name}
            style={{ height: "8em", width: "8em" }}
          />
          <div className="card-body p-0">
            <p className="card-text text-center text-bg-dark rounded-5">
              {pokemon.name}
            </p>
          </div>
        </div>
      );
    });
  };

  const renderPaginationButtons = () => {
    return paginationRange.map((pageNumber) => {
      return (
        <button
          className={`btn btn-outline-primary mx-1 p-1 mb-3 ${
            pageNumber === currentPage ? "active" : ""
          }`}
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div
      className="container mt-5"
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <h1 className="my-4">Pokedex</h1>
      <div className="d-flex flex-wrap">{renderPokemonCards()}</div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          className="btn btn-primary ms-2"
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(pokemonList.length / pokemonPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
