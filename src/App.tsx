import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Home, Book } from "./pages";
import { Header } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Route
        render={({ location }) => {
          return (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/book" render={() => <Book />} />
              </Switch>
            </AnimatePresence>
          );
        }}
      />
    </>
  );
}

export default App;
