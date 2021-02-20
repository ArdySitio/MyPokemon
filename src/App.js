import React, { useState } from "react";
import { Paper, Switch as Switches } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, MyPokemon, PokemonDetail } from "./pages";
// import Home from "./pages/Home";
// import MyPokemon from "./pages/MyPokemon";
// import PokemonDetail from "./pages/PokemonDetail";
import { Provider } from "react-redux";
import store from "./store/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Paper>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mypokemon" component={MyPokemon} />
              <Route path="/detail/:pokemonId" component={PokemonDetail} />
              <Route path="*" render={() => <h1>Page does not exist!</h1>} />
            </Switch>
          </div>
        </Paper>
      </Router>
    </Provider>
  );
}

export default App;
