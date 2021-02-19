// == Import npm
import React from 'react';

// == Import
import './sidebar.scss';

// == Composant
const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__containerStreamers">
      <header>
        <h2 className="sidebar__title">chaînes recommandées <i className="fas fa-exchange-alt" /></h2>

      </header>
      <ul className="sidebar__listStream">
        <li className="sidebar__streamer">
          <img className="sidebar__streamer__logo" src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-370-456322-1.png" alt="logo du streamer" />
          <section className="sidebar__streamer__infos">
            <h2 className="sidebar__streamer__infos__name">streamer 1</h2>
            <h3 className="sidebar__streamer__infos__gamePlayed">daoc</h3>
          </section>
          <span className="sidebar__streamer__viewers">2,8 K</span>
        </li>
        <li className="sidebar__streamer">
          <img className="sidebar__streamer__logo" src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-370-456322-1.png" alt="logo du streamer" />
          <section className="sidebar__streamer__infos">
            <h2 className="sidebar__streamer__infos__name">streamer 2</h2>
            <h3 className="sidebar__streamer__infos__gamePlayed">daoc</h3>
          </section>
          <span className="sidebar__streamer__viewers">2,8 K</span>
        </li>
        <li className="sidebar__streamer">
          <img className="sidebar__streamer__logo" src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-370-456322-1.png" alt="logo du streamer" />
          <section className="sidebar__streamer__infos">
            <h2 className="sidebar__streamer__infos__name">streamer 3</h2>
            <h3 className="sidebar__streamer__infos__gamePlayed">daoc</h3>
          </section>
          <span className="sidebar__streamer__viewers">2,8 K</span>
        </li>
      </ul>

    </div>
    <form className="sidebar__searchFriends">
      <input
        className="sidebar__searchFriends__input"
        type="text"
        placeholder="Chercher des amis"
      />
    </form>
  </div>
);

// == Export
export default Sidebar;
