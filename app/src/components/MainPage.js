import React from "react";
import { Link } from 'react-router-dom';

class MainPage extends React.Component  {

  render() {
    return (
        <div className="homepage">
            <div className="main-title">
                <h1><Link to="/Portfolio">PORTFOLIO</Link></h1>
                <span><Link to="/Portfolio">смотреть галерею</Link></span>
                <div className="scroll-prompt">
                    <div className="scroll-prompt-arrow-container">
                      <div className="scroll-prompt-arrow"><div></div></div>
                      <div className="scroll-prompt-arrow"><div></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MainPage;
