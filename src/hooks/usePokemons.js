import { useState, useEffect } from "react";
import axios from "axios";

const usePokemons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let pokemons = [];
    for (let i = 1; i <= 100; i++) {
      pokemons.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    Promise.all(pokemons).then((results) => {
      setData(results);
    });
  }, []);

  return data;
};

export default usePokemons;
