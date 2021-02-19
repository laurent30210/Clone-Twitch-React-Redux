// == Import npm
import React from 'react';

// == Import
import logoTwitch from '../../assets/images/icons/iconTwitch.svg';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav__items">
        <li className="header__nav__item">
          <img
            src={logoTwitch}
            alt="logo twitch"
            className="header__nav__logoTwitch"
          />
        </li>
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
