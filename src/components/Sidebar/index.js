// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeTypeNumberOfViewers } from 'src/utils';
import Streamer from './Streamer';

// == Import
import './sidebar.scss';

// == Composant
const Sidebar = ({
  liveStreamsList,
  handleMenuActived,
  menuActived,
  value2,
  onChangeInput2,
}) => {
  const [size, setSize] = useState([0, 0]);
  const [listStreamers, setlistStreamers] = useState('');

  useEffect(() => {
    const filter = (value) => {
      const newList = liveStreamsList.filter((streamer) => (
        streamer.user_login.toLowerCase().includes(value)));
      setlistStreamers(newList);
    };
    filter(value2);
  }, [value2]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      className="sidebar"
      style={{ width: menuActived ? 'auto' : '250px' && size[0] < 1100 && 'auto' }}
    >
      <div className="sidebar__containerStreamers">
        <header>
          <h2 className="sidebar__title">{size[0] > 1100 && !menuActived ? 'chaînes recommandées' : ''}
            <i
              className="fas fa-exchange-alt"
              onClick={handleMenuActived}
              style={{ cssFloat: menuActived ? 'none' : 'right' && size[0] < 1100 && 'none' }}
            />
          </h2>

        </header>
        <ul className="sidebar__listStream">
          {liveStreamsList && liveStreamsList.map((streamer, index) => (
            (index < 7)
           && (
           <Streamer
             key={streamer.id}
             userName={streamer.user_name}
             gameName={streamer.game_name}
             loginName={streamer.login}
             viewers={changeTypeNumberOfViewers(streamer.viewer_count)}
             userPic={streamer.picUser}
             menuActived={menuActived}
           />
           )
          ))}
        </ul>

      </div>
      { !menuActived && (
      <form className="sidebar__searchFriends">
        <input
          className="sidebar__searchFriends__input"
          type="text"
          placeholder="Chercher des amis"
          value={value2}
          onChange={onChangeInput2}
        />
        <ul
          className="sidebar__searchFriends__values"
          style={{ visibility: !value2 ? 'hidden' : 'visible' }}
        >
          {listStreamers && listStreamers.map((streamer) => (
            <Link
              to={{
                pathname: '/',
              }}
              className="channelStream__link"
            >
              <li className="sidebar__searchFriends__value">{streamer.user_login}</li>
            </Link>
          ))}

        </ul>
      </form>
      )}
    </div>
  );
};

// == Export
export default Sidebar;
