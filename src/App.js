
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home/home";
import Register from "./pages/register/register";
import List from "./pages/list/list";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/list">
            <List />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
