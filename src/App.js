import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './Api';
import { useState, useEffect } from 'react';
import { FavoriteProvider } from './Context/FavoriteContext';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  
  const fetchPokemons = async()=>{
    try {
      setLoading(true);

      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name)=>{
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);

    if(isFavorite >= 0){
      updated.splice(isFavorite, 1);
    }else{
      updated.push(name);
    }

    setFavorites(updated);
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons
      }}>
      <div>
        <NavBar />

        <div className='app'>
          <SearchBar/>
          
          <Pokedex
            loading={loading}
            pokemons={pokemons} 
            page={page} 
            setPage={setPage} 
            total={total} 
          />                                  
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
