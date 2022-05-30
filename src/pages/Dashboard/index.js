import Text from '../../components/Text';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export function Dasboard() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(()=>{
    async function getItens(){
     const {data} = await api.get('/pokemons');
     const resp = await Promise.all(data.results.map((item) => api.get(item.url)));

     const format = resp.map((req) => req.data);
     setPokemon(format);
    }

    getItens();
  },[]);
  return (
      <div>
        <Text as="h1">
          Dashboard
        </Text>
        <Text>
          Search for Pokémon by name or using the National Pokédex number
        </Text>
        {
          pokemon.lenght > 0 && pokemon.map(item => {
            <div key={item.id}>
              {item.name}

              <img src={item.sprites.front_default} alt={item.name} />
            </div>
          })
        }
      </div>
  );
}
