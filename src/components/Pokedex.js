import React from 'react'
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import Loader from './Loader';

const Pokedex = (props) => {
  const {pokemons, page, setPage, total, loading} = props;

  const lastPage = () =>{
    const nextPage = Math.max(page -1, 0)
    setPage(nextPage);
  }

  const nextPage = () =>{
    const nextPage = Math.min(page + 1, total)
    setPage(nextPage);
  }

  return (
    <div className='pokedexContainer'>
        <div className='pokedexContainer__header'>
            <h1>Pokedex</h1>
            <Pagination
              page ={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
        </div>

        {
          loading ? <Loader/> :

          <div className="pokedexContainer__pokedexGrid">
            {pokemons.map((pokemon, idx)=>{
                return <Pokemon pokemon={pokemon} key={idx} />
            })}
          </div>
        }
    </div>
  )
}

export default Pokedex