import React, {useEffect} from "react";
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
  Route,
  useLocation
} from "react-router-dom";


class App extends React.Component{
  const location = useLocation();

  useEffect() => {
    console.log('Location changed');
  }, [location]

  render(){
    return (
      <div className="App">
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/price" component={Price}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
