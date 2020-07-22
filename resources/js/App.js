import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

export function App() {
    return (
      <Router>
          <Header />
          <Nav />

          <div className="app">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/search/:query" children={<Search />} />
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>

          <Footer />
      </Router>
    );
}

export default App;
