// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import

// == Composant
const Streamer = ({
  userName,
  gameName,
  viewers,
  loginName,
  userPic,
  menuActived,
}) => (
  <Link
    to={{
      pathname: `/live/${loginName}`,
    }}
    className="sidebar__streamer"
  >
    <img className="sidebar__streamer__logo" src={userPic} alt={`logo ${loginName}`} />
    {!menuActived && (
    <>
      <section className="sidebar__streamer__infos">
        <h2 className="sidebar__streamer__infos__name">{userName}</h2>
        <h3 className="sidebar__streamer__infos__gamePlayed">{gameName}</h3>
      </section>
      <span className="sidebar__streamer__viewers">{viewers}</span>
    </>
    )}
  </Link>
);

// == Export
export default Streamer;
