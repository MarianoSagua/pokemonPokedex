import React from 'react';
import { useState, useEffect } from 'react';
import { searchPokemon } from '../Api';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState("");

  const buscarPokemon = (e) =>{
    setSearchText(e.target.value);
  }

  const onClick = async (e) =>{
    try {
      const data = await searchPokemon(searchText);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='searchBarContainer'>
        <div className='searchBarContainer__searchBar'>
          <input type="text" placeholder='Buscar Pokemon' onChange={buscarPokemon} />
        </div>

        <div className='searchBarContainer__btn'>
          <button onClick={onClick}>Buscar</button>
        </div>
      </div>
    </>
  )
}

export default SearchBar










