import React, { useContext } from 'react'
import FavoriteContext from '../Context/FavoriteContext';

const Pokemon = (props) => {
    const { pokemon } = props;
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e)=>{
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

  return (
    <div className='pokemonCard'>
        <div className='pokemonCard__ContainerImg'>
            <img className='pokemonCard__ContainerImg--img' src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

        <div className='pokemonCard__body'>

            <div className='card__top'>
                <div className='card__top--texto'>{pokemon.name}</div>
                <div className='card__top--texto'>#{pokemon.id}</div>
            </div>

            <div className='card__bottom'>
                <div className='card__bottom--PokemonType'>
                    {pokemon.types.map((type, idx)=>{
                        return(
                            <div className='pokemon-type-text' key={idx}>{type.type.name}</div>
                        )
                    })}
                </div>

                <div className='card__bottom--Icon'>
                    <button onClick={clickHeart}>
                        <div className='pokemon-favorite'>{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pokemon