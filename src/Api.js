export const searchPokemon = async (pokemonBuscar)=>{
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscar}`;
        const response = await fetch(urlPokemon);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemons = async (limit, offset)=>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonData = async (url) =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {

    }
}