import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import colorTypes from "../data/color_types";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chip: {
    marginRight: "10px",
    textTransform: "uppercase",
    color: "white",
  },
});

export default () => {
  const { pokemonId } = useParams();
  const classes = useStyles();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  });

  if (pokemon === null) {
    return <p>Loading . . .</p>;
  }

  return (
    <Container style={{ height: "100vh" }}>
      <Typography variant="h4" style={{ marginBottom: ".2em" }}>
        {`${pokemon.id}.`} {`${pokemon.name}`}
      </Typography>
      <div style={{ display: "flex" }}>
        <div>
          <Typography>
            <img
              style={{ width: "200px", height: "200px" }}
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            ></img>
          </Typography>
        </div>
        <div style={{ paddingLeft: "2em" }}>
          <Typography variant="h5">Pokemon Types:</Typography>
          {pokemon.types.map((type, i) => {
            const name = type.type.name;
            return (
              <Chip
                className={classes.chip}
                label={name}
                style={{ backgroundColor: `${colorTypes[name]}` }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Typography variant="h5">Pokemon Moves:</Typography>
        {pokemon.moves.map((move, i) => {
          const skill = move.move.name;
          return (
            <Typography>
              {`${i + 1}.`} {`${skill}`}
            </Typography>
          );
        })}
      </div>
    </Container>
  );
};
