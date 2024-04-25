import React from "react";
import navigationItems from '../../data/NavigationItems.json';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header id="header" className={props.attr} role="heading" aria-level="1">
            <nav className="header__nav">
                <ul>
                    {navigationItems.map(navItem => (
                    <li key={navItem.id}>
                       <Link to={navItem.url}>{navItem.title}</Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Header;
