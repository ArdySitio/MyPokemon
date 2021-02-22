import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capturePokemon } from "../store/actions/action";
import Swal from "sweetalert2";
import axios from "axios";

const Media = withStyles({
  root: {
    marginTop: 30,
    height: 100,
  },
})(CardMedia);

const CardItem = withStyles({
  root: {
    maxWidth: 250,
    marginTop: "10%",
  },
})(Card);

export default function Pokemons({ pokemon }) {
  // console.log(JSON.stringify(pokemon, null, 2), "<<<< from Pokemons");
  const dispatch = useDispatch();

  const handleCapturePoke = (e, pokemon) => {
    if (pokemon.base_experience <= 100) {
      e.preventDefault();
      dispatch(capturePokemon(pokemon));
      Swal.fire("Congrats!", "You've catch a pokemon!", "success");
    } else {
      Swal.fire("", "Can't Capture Pokemon", "error");
    }
  };

  return (
    <CardItem>
      <CardActionArea>
        <Link to={`/detail/${pokemon.data.id}`}>
          <Media
            image={pokemon.data.sprites.front_default}
            title={pokemon.data.name}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${pokemon.data.id}`}>
          <Button size="small" style={{ color: "#29b6f6" }}>
            Detail
          </Button>
        </Link>
        <Button
          onClick={(e) => handleCapturePoke(e, pokemon.data)}
          size="small"
          style={{ color: "darkorange" }}
        >
          Catch
        </Button>
      </CardActions>
    </CardItem>
  );
}
