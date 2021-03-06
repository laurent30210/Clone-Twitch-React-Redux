// == Import npm
import React from 'react';
import {
  changeTypeTextLanguage,
  changeTypeNumberOfViewers,
} from 'src/utils';
import { Link } from 'react-router-dom';

// == Import
import './liveStreamMin.scss';

// == Composant
const LiveStreamMin = ({
  id, userName, gameName, title, viewer, language, image, loginName, userPic, type,
}) => (
  <li className="LiveStreamMin" id={id}>
    <header className="LiveStreamMin__header">
      <Link
        to={{
          pathname: `/live/${loginName}`,
        }}
        className="LiveStreamMin__link"
      >
        <img
          src={image}
          alt={`stream ${gameName} in progress`}
          className="LiveStreamMin__img"
        />
      </Link>
      <span className="LiveStreamMin__live">{type}</span>
    </header>
    <section className="LiveStreamMin__containerUser">
      <img
        className="LiveStreamMin__containerUser__logoUser"
        src={userPic}
        alt={`logo ${loginName}`}
      />
      <div className="LiveStreamMin__containerUser__content">
        <Link
          to={{
            pathname: `/live/${loginName}`,
          }}
        >
          <h3 className="LiveStreamMin__containerUser__content__userName">{userName}</h3>
        </Link>
        <h3 className="LiveStreamMin__containerUser__content__gamePlayed">{gameName}</h3>
        <span className="LiveStreamMin__viewers">{`${changeTypeNumberOfViewers(viewer)} spectateurs`}</span>
        <span className="LiveStreamMin__details__icon LiveStreamMin__details__icon__language">{changeTypeTextLanguage(language)}</span>
      </div>
    </section>
  </li>
);

// == Export
export default LiveStreamMin;
