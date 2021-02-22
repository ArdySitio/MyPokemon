import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Pokemons from "../components/PokeCapture";

export default function MyPokemon() {
  const pokemons = useSelector((state) => state.myPokemon);

  return (
    <Container>
      <Grid container spacing={2}>
        {pokemons.map((pokemon, i) => {
          return (
            <Grid item xs={3} key={i}>
              <Pokemons pokemon={pokemon} idx={i} key={i} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
