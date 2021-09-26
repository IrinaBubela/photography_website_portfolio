import React from "react";
import NavbarComponent from './layouts/NavBar';
import Footer from './layouts/Footer';
import MainPage from "./components/MainPage";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import "./home.css";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){

  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/photography_website_portfolio" exact component={MainPage} />
          <Route path="/photography_website_portfolio/portfolio" component={Portfolio}/>
          <Route path="/photography_website_portfolio/price" component={Price}/>
          <Route path="/photography_website_portfolio/reviews" component={Reviews}/>
          <Route path="/photography_website_portfolio/contact" component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
