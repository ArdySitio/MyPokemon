export const capturePokemon = (myPokemon) => {
  console.log(myPokemon, "<<< new action");
  return {
    type: "CAPTURE",
    payload: myPokemon,
  };
};

export const releasePokemon = (myPokemon) => {
  // console.log(myPokemon, "<<< new action");
  return {
    type: "RELEASE",
    payload: myPokemon,
  };
};

export const pokemonDetail = (pokemonId) => {
  return (dispatch, getState) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "DETAIL_POKEMON",
          payload: data,
        });
      });
  };
};
