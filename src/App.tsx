import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Home, Book } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Route
        render={({ location }) => {
          return (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route
                  exact
                  path="/book/:id"
                  render={() => <Book location={location} />}
                />
              </Switch>
            </AnimatePresence>
          );
        }}
      />
    </>
  );
}

export default App;
