import { Link, useLocation } from "react-router-dom";

import '../css/Header.css';

import Logo from "../img/logo.svg";

export default function Header() {

    const currentLocation = useLocation().pathname;

    return (
        
        <header className="header">
            <Link to="/">
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
                        >
                                À Propos
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
  };