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
import Swal from "sweetalert2";
import { releasePokemon } from "../store/actions/action";

const Media = withStyles({
  root: {
    height: 100,
  },
})(CardMedia);

const CardItem = withStyles({
  root: {
    maxWidth: 250,
    marginTop: "10%",
  },
})(Card);

export default function PokeCapture({ pokemon, idx }) {
  const dispatch = useDispatch();

  console.log(idx, ">>> pokemon");

  const handleRelease = (idx) => {
    dispatch(releasePokemon(idx));
  };

  return (
    <CardItem>
      <CardActionArea>
        <Link to={`/detail/${pokemon.id}`}>
          <Media image={pokemon.sprites.front_default} title={pokemon.name} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${pokemon.id}`}>
          <Button size="small" style={{ color: "#29b6f6" }}>
            Detail
          </Button>
        </Link>
        <Button
          size="small"
          style={{ color: "red" }}
          onClick={() => handleRelease(idx)}
        >
          Release
        </Button>
      </CardActions>
    </CardItem>
  );
}
