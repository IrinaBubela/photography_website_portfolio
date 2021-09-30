import React from "react";
import { Link } from 'react-router-dom';

class MainPage extends React.Component  {

  render() {
    return (
        <div className="main-content">
          <div className="main-title">
            <h1><Link to="/photography_website_portfolio/Portfolio">PORTFOLIO</Link></h1>
            <span><Link to="/photography_website_portfolio/Portfolio">смотреть галерею</Link></span>
          </div>
        </div>
    );
  }
}

export default MainPage;
