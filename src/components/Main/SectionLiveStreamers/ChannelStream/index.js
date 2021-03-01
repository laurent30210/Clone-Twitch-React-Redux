// == Import npm
import React from 'react';
// == Import
import './channelStream.scss';
import { changeTypeTextLanguage, changeTypeNumberOfViewers } from 'src/utils';
import { Link } from 'react-router-dom';

// == Composant
const ChannelStream = ({
  id, userName, gameName, title, viewer, language, image, loginName, userPic, type,
}) => (
  <li className="channelStream" id={id}>
    <header className="channelStream__header">
      <div className="cornerLeft" />
      <div className="cornerTop" />
      <div className="cornerRight" />
      <Link
        to={{
          pathname: `/live/${loginName}`,
        }}
      >
        <img
          src={image}
          alt={`stream ${gameName} in progress`}
          className="channelStream__img"
        />
      </Link>
      <span className="channelStream__viewers">{`${changeTypeNumberOfViewers(viewer)} spectateurs`}</span>
      <span className="channelStream__live">{type}</span>
    </header>
    <section className="channelStream__containerUser">
      <img
        className="channelStream__containerUser__logoUser"
        src={userPic}
        alt={`logo ${loginName}`}
      />
      <div className="channelStream__containerUser__content">
        <Link
          to={{
            pathname: `/live/${loginName}`,
          }}
        >
          <h2 className="channelStream__containerUser__content__title">{title}</h2>
        </Link>
        <h3 className="channelStream__containerUser__content__userName">{userName}</h3>
        <h3 className="channelStream__containerUser__content__gamePlayed">{gameName}</h3>
      </div>
    </section>
    <section className="channelStream__details">
      <span className="channelStream__details__icon channelStream__details__icon__language">{changeTypeTextLanguage(language)}</span>
    </section>
  </li>
);
// == Export
export default ChannelStream;
