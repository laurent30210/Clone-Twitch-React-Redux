// == Import npm
import React from 'react';

// == Import

// == Composant
const Streamer = ({
  userName, gameName, viewers, loginName, userPic,
}) => (
  <li className="sidebar__streamer">
    <img className="sidebar__streamer__logo" src={userPic} alt={`logo ${loginName}`} />
    <section className="sidebar__streamer__infos">
      <h2 className="sidebar__streamer__infos__name">{userName}</h2>
      <h3 className="sidebar__streamer__infos__gamePlayed">{gameName}</h3>
    </section>
    <span className="sidebar__streamer__viewers">{viewers}</span>
  </li>
);

// == Export
export default Streamer;
