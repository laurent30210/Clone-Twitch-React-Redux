// == Import npm
import React, { useEffect, useRef } from 'react';
// == Import
import './channelStream.scss';
import {
  changeTypeTextLanguage,
  changeTypeNumberOfViewers,
  colorsRandom,
} from 'src/utils';
import { Link } from 'react-router-dom';

// == Composant
const ChannelStream = ({
  id, userName, gameName, title, viewer, language, image, loginName, userPic, type,
}) => {
  const backgroundRef = useRef(null);
  const cornerTopRef = useRef(null);
  const cornerRightRef = useRef(null);

  useEffect(() => {
    const color = colorsRandom();
    backgroundRef.current.style.backgroundColor = color;
    cornerTopRef.current.style.borderRight = `.4rem solid ${color}`;
    cornerRightRef.current.style.borderTop = `.4rem solid ${color}`;
  }, []);

  return (
    <li className="channelStream" id={id}>
      <header className="channelStream__header">
        <div
          ref={backgroundRef}
          className="backgroundImg"
        />
        <Link
          to={{
            pathname: `/live/${loginName}`,
          }}
          className="channelStream__link"
        >
          <img
            src={image}
            alt={`stream ${gameName} in progress`}
            className="channelStream__img"
          />
        </Link>
        <span className="channelStream__viewers">{`${changeTypeNumberOfViewers(viewer)} spectateurs`}</span>
        <span className="channelStream__live">{type}</span>
        <div
          className="cornerTop"
          ref={cornerTopRef}
        />
        <div
          className="cornerRight"
          ref={cornerRightRef}
        />
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
            <h3 className="channelStream__containerUser__content__userName">{userName}</h3>
          </Link>
          <h3 className="channelStream__containerUser__content__gamePlayed">{gameName}</h3>
        </div>
      </section>
      <section className="channelStream__details">
        <span className="channelStream__details__icon channelStream__details__icon__language">{changeTypeTextLanguage(language)}</span>
      </section>
    </li>
  );
};
// == Export
export default ChannelStream;
