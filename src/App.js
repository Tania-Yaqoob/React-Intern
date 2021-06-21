import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Hookscomponents/Header";
import { Favouritelist } from "./Hookscomponents/Favouritelist";
import { Add } from "./Hookscomponents/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
            <Add />
          </Route>
          <Route exact path="/favouritelist">
            <Favouritelist />
          </Route>     
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;