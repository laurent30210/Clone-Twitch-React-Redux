// == Import npm
import React from 'react';
import Streamer from './Streamer';
// == Import
import './sidebar.scss';

// == Composant
const Sidebar = ({ liveStreamsList }) => (
  <div className="sidebar">
    <div className="sidebar__containerStreamers">
      <header>
        <h2 className="sidebar__title">chaînes recommandées <i className="fas fa-exchange-alt" /></h2>

      </header>
      <ul className="sidebar__listStream">
        {liveStreamsList && liveStreamsList.map((streamer) => (
          (streamer.viewer_count > 50000)
           && (
           <Streamer
             key={streamer.id}
             userName={streamer.user_name}
             gameName={streamer.game_name}
             viewers={streamer.viewer_count}
           />
           )
        ))}
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
