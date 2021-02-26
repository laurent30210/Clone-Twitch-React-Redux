// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import logoTwitch from '../../assets/images/icons/iconTwitch.svg';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav__items header__nav__items__left">
        <Link className="header__nav__item" to="/">
          <img
            src={logoTwitch}
            alt="logo de twitch"
            className="header__nav__logoTwitch"
          />
        </Link>
        <Link className="header__nav__item header__nav__item__txt" to="/">
          Suivis
        </Link>
        <Link className="header__nav__item header__nav__item__txt" to="/">

          Parcourir
        </Link>
        <Link className="header__nav__item header__nav__item__icon" to="/">
          <i className="fas fa-ellipsis-h" />
        </Link>
      </ul>
      <ul className="header__nav__items header__nav__items__middle">
        <li className="header__nav__item">
          <form
            className="header__nav__item__form"
            type="submit"
          >
            <input
              className="header__nav__item__inputSearch"
              placeholder="Rechercher"
              type="text"
            />
            <button
              type="submit"
              className="header__nav__item__btnSearch"
            >
              <i className="fas fa-search" />
            </button>
          </form>
        </li>
      </ul>
      <ul className="header__nav__items header__nav__items__right">
        <Link className="header__nav__item header__nav__item__icon" to="/">
          <i className="fas fa-crown" />
        </Link>
        <Link className="header__nav__item header__nav__item__icon" to="/">
          <i className="fas fa-inbox" />
        </Link>
        <Link className="header__nav__item header__nav__item__icon" to="/">
          <i className="far fa-comment-alt" />
        </Link>
        <Link className="header__nav__item header__nav__item__icon header__nav__item__icon__user" to="/">
          <i className="far fa-user" />
        </Link>
      </ul>
    </nav>
    <div className="header__responsiveMenuIcon">
      <i className="fas fa-bars" />
    </div>
  </header>
);

// == Export
export default Header;
