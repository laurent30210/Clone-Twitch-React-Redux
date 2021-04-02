// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import logoTwitch from '../../assets/images/icons/Twitch_Logo.png';
import './header.scss';

// == Composant
const Header = ({
  value,
  onChangeInput,
  liveStreamsList,
}) => {
  const [listStreamers, setListStreamers] = useState('');

  useEffect(() => {
    const filter = (value) => {
      const newList = liveStreamsList.filter((streamer) => (
        streamer.user_login.toLowerCase().includes(value.toLowerCase())));
      setListStreamers(newList);
    };
    filter(value);
  }, [value]);

  return (
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
                name="headerValue"
                value={value}
                onChange={(event) => {
                  onChangeInput(event.target.value, event.target.name);
                }}
              />
              <button
                type="submit"
                className="header__nav__item__btnSearch"
              >
                <i className="fas fa-search" />
              </button>
              <ul
                className="header__nav__values"
                style={{ visibility: !value ? 'hidden' : 'visible' }}
              >
                {listStreamers && listStreamers.map((streamer) => (
                  <Link
                    to={{
                      pathname: `live/${streamer.user_login}`,
                    }}
                    className="channelStream__link"
                  >
                    <li className="header__nav__value">
                      <img
                        src={streamer.picUser}
                        alt={`stream ${streamer.user_name} in progress`}
                        className="streamer__img"
                      />
                      {streamer.user_login}
                    </li>
                  </Link>
                ))}

              </ul>
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
};

// == Export
export default Header;
