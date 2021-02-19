// == Import npm
import React from 'react';

// == Import
import logoTwitch from '../../assets/images/icons/iconTwitch.svg';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav__items header__nav__items__left">
        <li className="header__nav__item">
          <img
            src={logoTwitch}
            alt="logo de twitch"
            className="header__nav__logoTwitch"
          />
        </li>
        <li className="header__nav__item header__nav__item__txt">
          Suivis
        </li>
        <li className="header__nav__item header__nav__item__txt">
          Parcourir
        </li>
        <li className="header__nav__item header__nav__item__icon">
          <i className="fas fa-ellipsis-h" />
        </li>
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
        <li className="header__nav__item header__nav__item__icon">
          <i className="fas fa-crown" />
        </li>
        <li className="header__nav__item header__nav__item__icon">
          <i className="fas fa-inbox" />
        </li>
        <li className="header__nav__item header__nav__item__icon">
          <i className="far fa-comment-alt" />
        </li>
        <li className="header__nav__item header__nav__item__icon header__nav__item__icon__user">
          <i className="far fa-user" />
        </li>
      </ul>
    </nav>
    <div className="header__responsiveMenuIcon">
      <i className="fas fa-bars" />
    </div>
  </header>
);

// == Export
export default Header;
