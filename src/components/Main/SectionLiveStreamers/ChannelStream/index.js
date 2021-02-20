// == Import npm
import React from 'react';
// == Import
import './channelStream.scss';

// == Composant
const ChannelStream = ({
  id, userName, gameName, title, viewer, language, image,
}) => (
  <li className="channelStream" id={id}>
    <header className="channelStream__header">
      <img
        src={image}
        alt="stream in progress"
        className="channelStream__img"
      />
      <span className="channelStream__viewers">{`${viewer} spectateurs`}</span>
    </header>
    <section className="channelStream__containerUser">
      <img
        className="channelStream__containerUser__logoUser"
        src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-370-456322-1.png"
        alt="logo user"
      />
      <div className="channelStream__containerUser__content">
        <h2 className="channelStream__containerUser__content__title">{title}</h2>
        <h3 className="channelStream__containerUser__content__userName">{userName}</h3>
        <h3 className="channelStream__containerUser__content__gamePlayed">{gameName}</h3>
      </div>
    </section>
    <section className="channelStream__details">
      <span className="channelStream__details__icon channelStream__details__icon__language">{language}</span>
      <span className="channelStream__details__icon channelStream__details__icon__techno">réalité</span>
    </section>
  </li>
);

// == Export
export default ChannelStream;
