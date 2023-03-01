import React, { useContext } from 'react';
import FavoriteContext from '../Context/FavoriteContext';

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  return (
    <nav className='navPrincipal'>
      <div className='navPrincipal__logo'>
        <img src={imgURL} alt="logoPokeApi"className='navBarImg'/>
      </div>

      <div className='navPrincipal__icon'>❤️ {favoritePokemons.length}</div>
    </nav>
  )
}

export default NavBar