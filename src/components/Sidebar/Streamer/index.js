// == Import npm
import React from 'react';

// == Import

// == Composant
const Streamer = ({ userName, gameName, viewers }) => (
  <li className="sidebar__streamer">
    <img className="sidebar__streamer__logo" src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-370-456322-1.png" alt="logo du streamer" />
    <section className="sidebar__streamer__infos">
      <h2 className="sidebar__streamer__infos__name">{userName}</h2>
      <h3 className="sidebar__streamer__infos__gamePlayed">{gameName}</h3>
    </section>
    <span className="sidebar__streamer__viewers">{viewers}</span>
  </li>
);

// == Export
export default Streamer;
