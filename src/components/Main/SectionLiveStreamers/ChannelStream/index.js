// == Import npm
import React from 'react';
// == Import
import './channelStream.scss';

// == Composant
const ChannelStream = ({
  id, userName, gameName, title, viewer, language, image,
}) => (
  <li className="channelStream" id={id}>
    <header>
      <img
        src={image}
        alt="stream in progress"
        className="channelStream__img"
      />
      <span>{`${viewer} spectateurs`}</span>
    </header>
    <section>
      <img
        className="channelStream__logoUser"
        src="logo.png"
        alt="logo user"
      />
      <div className="channelStream__content">
        <h2 className="channelStream__content__title">{title}</h2>
        <h3 className="channelStream__content__userName">{userName}</h3>
        <h3 className="channelStream__content__gamePlayed">{gameName}</h3>
      </div>
    </section>
    <section className="channelStream__details">
      <span className="channelStream__language">{language}</span>
      <span className="channelStream__techno">réalité</span>
    </section>
  </li>
);

// == Export
export default ChannelStream;
