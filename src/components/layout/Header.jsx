import React, {useState} from "react";
import navigationItems from "../../data/NavigationItems.json";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [active, setActive] = useState(false);
 
  const hamburgerToggle = () => {
    setActive(!active);
  }


  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/home">
              PARK <span>JUNG HWAN</span>
            </Link>
          </li>
          {navigationItems.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.url}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="header__nav-mobile">
        <h1 className="logo">
          <Link to="/home">
            PARK <span>JUNG HWAN</span>
          </Link>
        </h1>
        <button className={`hamburger-button ${active ? 'active' : ''}` }
        onClick={hamburgerToggle}>
          <span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </span>
        </button>
        <div className={`hamburger-menu ${active ? 'active' : ''}` }>
          <ul>
            {navigationItems.map((navItem) => (
              <li key={navItem.id}>
                <Link to={navItem.url}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
