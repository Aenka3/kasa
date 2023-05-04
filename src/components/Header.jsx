import { Link } from "react-router-dom";

import '../css/Header.css';

import ScrollToTop from './scroll/ScrollToTop'

import Logo from "../img/logo.svg";

export default function Header() {

    const currentLocation = window.location.pathname;

    return (
        
        <header className="header">

            <Link to="/" onClick={ScrollToTop}>
                <img src={Logo} alt="Logo" className="header_logo" />
            </Link>
            
            <nav className="header_nav">
                <div className="header_nav_links">
                    <div className="header_nav_links_link">
                        <Link 
                            className={currentLocation === '/'
                                                            ? 'header_nav_links_link_active'
                                                            : 'header_nav_links_link_inactive'}
                            to="/"
                            onClick={ScrollToTop}
                        >
                                Accueil
                        </Link>
                    </div>
                    <div className="header_nav_links_link">
                        <Link 
                            className={currentLocation === '/aboutus'
                                                                ? 'header_nav_links_link_active'
                                                                : 'header_nav_links_link_inactive'}
                            to="/aboutus"
                            onClick={ScrollToTop}
                        >
                                À Propos
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
  };