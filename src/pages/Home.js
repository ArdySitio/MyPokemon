import { Grid, Container } from "@material-ui/core";
import React, { useState } from "react";
import Pokemons from "../components/PokemonsList";
import usePokemons from "../hooks/usePokemons";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default () => {
  const data = usePokemons();

  return (
    <Container data-testid="container">
      <Grid container spacing={2}>
        {data.map((pokemon, i) => {
          return (
            <Grid item xs={3} key={i}>
              <Pokemons pokemon={pokemon} key={i} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
