import { useState, useEffect } from 'react';

import PokemonCardComponent from '../components/PokemonCardComponent';

import { Link } from 'react-router-dom';

const Home = () => {
    const [count, setCount] = useState(0);
    const [listaPokemones, setListaPokemones] = useState([{ name: '', url: '' }]);
  
    useEffect(() => {
      console.log('Hook effect ejecutándose');
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20') // Limitamos para no cargar demasiados datos
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setListaPokemones(json.results);
        })
        .catch(error => {
          console.log("Error al consumir el endpoint");
        });
    }, [count]);
  
    return (
      <>
        <div className='container'>
          <div className="row">
            <h1>Pokedex</h1>
            <button onClick={() => setCount(count + 1)}>Presioname</button>
            <p><Link to='about'></Link></p>
          </div>
  
          <div className="row">
            {listaPokemones.map((pokemon, index) => {
              const idPokemon = pokemon.url.split('/')[6];
              return <PokemonCardComponent nombre={pokemon.name} idPokemon={idPokemon} />;
            })}
          </div>
        </div>
      </>
    );
}


export default Home;