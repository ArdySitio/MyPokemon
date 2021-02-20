const initialState = {
  myPokemon: [],
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAPTURE":
      const newState = state.myPokemon.concat(action.payload);
      return {
        ...state,
        myPokemon: newState,
      };
    case "RELEASE":
      return {
        myPokemon: [
          ...state.myPokemon.filter((pokemon) => pokemon !== action.payload),
        ],
      };
    case "DETAIL_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
