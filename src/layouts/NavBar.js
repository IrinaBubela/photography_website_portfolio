import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import "../home.css";

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.refLinks = React.createRef();
        this.refCloseBtn = React.createRef();
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const expandedMenu = this.refLinks.current;
            expandedMenu.classList.add("hide");
            expandedMenu.classList.remove("show");
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }
    
    showMenu() {
        const expandedMenu = this.refLinks.current;
        const closeBtn = this.refCloseBtn.current;
        if (expandedMenu.classList.contains("show")) {
            expandedMenu.classList.add("hide");
            expandedMenu.classList.remove("show");
            closeBtn.style.display="none";
    
        } else {
            expandedMenu.classList.remove("hide");
            expandedMenu.classList.add("show");
            closeBtn.style.display="block";
        }
    }
    
    closeMenu(){
        const expandedMenu = this.refLinks.current;
        expandedMenu.classList.remove("show");
        expandedMenu.classList.add("hide");
    }

    render() {
        return (
            <div className="navbar">
                <div id="expanded-links"  className="hide" ref={this.refLinks}>
                    <div id="main-menu-close" className="close-btn" ref={this.refCloseBtn} onClick={() => this.closeMenu()}>
                        <svg width="20" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4602 21.1461L3.25238 0.938293C2.77947 0.46538 2.01277 0.46538 1.53986 0.938293C1.06694 1.41121 1.06694 2.1779 1.53986 2.65082L21.7476 22.8586C22.2206 23.3315 22.9873 23.3315 23.4602 22.8586C23.9331 22.3857 23.9331 21.619 23.4602 21.1461Z" fill="white"></path>
                        <path d="M21.7476 0.938268L1.53986 21.1461C1.06694 21.619 1.06694 22.3857 1.53986 22.8586C2.01277 23.3315 2.77947 23.3315 3.25238 22.8586L23.4602 2.65079C23.9331 2.17788 23.9331 1.41118 23.4602 0.938268C22.9873 0.465354 22.2206 0.465355 21.7476 0.938268Z" fill="white"></path>
                        </svg>
                    </div>
                    <ul >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/price">Price</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><HashLink to="/#footer">Contact</HashLink></li>
                    </ul>
                </div>
                <nav className="topnav">
                    <div className="topnav-header" >
                        <div>
                            <span className="icon" onClick={() => this.showMenu()}>
                                <svg width="30" height="20" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.7891 9.6875H1.21094C0.542137 9.6875 0 10.2296 0 10.8984C0 11.5672 0.542137 12.1094 1.21094 12.1094H29.7891C30.4579 12.1094 31 11.5672 31 10.8984C31 10.2296 30.4579 9.6875 29.7891 9.6875Z" fill="black"></path>
                                    <path d="M29.7891 0H1.21094C0.542137 0 0 0.542137 0 1.21094C0 1.87974 0.542137 2.42188 1.21094 2.42188H29.7891C30.4579 2.42188 31 1.87974 31 1.21094C31 0.542137 30.4579 0 29.7891 0Z" fill="black"></path>
                                    <path d="M29.7891 19.375H1.21094C0.542137 19.375 0 19.9171 0 20.5859C0 21.2547 0.542137 21.7969 1.21094 21.7969H29.7891C30.4579 21.7969 31 21.2547 31 20.5859C31 19.9171 30.4579 19.375 29.7891 19.375Z" fill="black "></path>
                                </svg>
                            </span>
                        </div>
                        <div className="photograper-name" id="photograper-name">
                            <Link to="/">
                            KATYA_POLYUH
                            </Link>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/katyapolyuh_ph/">Instagram</a>
                            <a>(29) 726-25-72</a>
                            <Link to="/price">
                                <button type="button" className="btn btn-price btn-dark btn-sm">Price</button>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default withRouter(NavbarComponent);